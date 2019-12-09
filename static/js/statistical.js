$(function () {
    var color = ['#a6c84c', '#ffa022', '#46bee9'],
        myLableColor = '#92939B',
        myLableLineColor = '#474956',
        myColor = ['#ECF8EA', '#7FE2EB', '#6DC6E6', '#9895F1', '#BA6DE5', '#DD22BE'],
        mycolor5 = ['#BFEFE4', '#6DC6E6', '#9895F1', '#BA6DE5', '#DD22BE'],
        myTitleStyle = { color: '#fff', fontSize: 12, fontWeight: 'normal' };
    var mySwiper, iscroller;
    var nowEchartsIns = [],
        mapVal,
        lineVal;
    var dataJson = null;
    //右侧
    $(document).on('click', '.openThe', function () {
        if ($('.character-list').hasClass('suo')) {
            $('.character-list').addClass('kai').removeClass('suo')
            $('.sf-btn').html('项目日志>>')
            $('.character-list .shadow').addClass('shadows')
        } else {
            $('.character-list').addClass('suo').removeClass('kai')
            $('.character-list .shadow').removeClass('shadows')
            $('.sf-btn').html('项目日志<<')
        }
    })
    //左侧
    $(document).on('click', '.dataLeftBtn', function () {
        if ($('.play-swiper').hasClass('shou')) {
            $('.play-swiper').addClass('fang').removeClass('shou')
            $('.dataLeftBtn').html('统计数据<<')
        } else {
            $('.play-swiper').addClass('shou').removeClass('fang')
            $('.dataLeftBtn').html('统计数据>>')
        }
    })
    //全屏
    var l = 1
    $(document).on('click', '.full-btn', function () {
        if (l === 1) {
            $('.iframe-selection,.section-left').hide()
            $('.section-right').css('left', 0)
            $('.header').hide()
            $('.section-right').css('top', '22px')
            var w = document.body.clientWidth
            $('.login-content').css('width', w).css('height', '106%').transitionEnd(function () {
                myeChart.resize()
            })
            l = 0
        } else if (l === 0) {
            $('.iframe-selection,.section-left').show()
            $('.header').show()
            $('.section-right').css('top', '60px')
            $('.section-right').css('left', '180px')
            $('.login-content').css('width', '1200').css('height', '100%').transitionEnd(function () {
                myeChart.resize()
            })
            l = 1
        }

    })


    var dt=setInterval(function () {
        helper.getExperList(false);           
    }, 2000)

    //根据日期获取数据
    var myeChart = echarts.init(document.getElementById("echart6"));
    var option = {
        title: {
            text: '',//dataTime.province.title
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 0,
            max: 80,
            seriesIndex: 0,
            show: false,
            left: 'left',
            top: 'bottom',
            inRange: { color: ['#BFEFE4', '#4ABDE6', '#7672ED', '#AE54E1', '#DD22BE'] },
            calculable: true
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: 'scale',
            layoutCenter: ['50%', '53%'],
            layoutSize: "108%",
            zoom: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)',
                    borderColor: 'rgba(100,149,237,1)'
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)'
                }
            }
        },
        series: [
            {
                name: '',//dataTime.province.name
                type: 'map',
                geoIndex: 0,
                mapType: 'china',
                roam: true,
                zoom: 1.2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [2, 0],
                        formatter: '{b}',
                        fontSize: 9,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'normal'
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []//dataTime.province.data
            },
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: (function () {
                        //if(autoPlays)return false;
                        return true;
                    })(),
                    period: 4,
                    trailLength: 0.02,
                    symbol: 'arrow',
                    symbolSize: 5,
                },
                lineStyle: {
                    normal: {
                        color: '#fff',
                        width: 0.2,
                        opacity: (function () {
                            //if(autoPlays)return 0;
                            return 0.5;
                        })(),
                        curveness: 0.2
                    }
                },

                data: []//convertData6(BJData6)
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [2, 0],
                        formatter: '{b}',
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei',
                        fontWeight: 'normal'
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    var val2;
                    val2 = (val[2] > 100) ? 100 : val[2];
                    return 1;//1 + val2/ 100;
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#fff '
                    }
                },
                data: []
                //BJData6.map(function(dataItem) {
                //              return {
                //                  name: dataItem[0].name,
                //                  value: geoCoordMap6[dataItem[0].name].concat([dataItem[0].value])
                //              };
                //          })
            },
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [],
                //          convertData(dataTime.dianliang.data.sort(function (a, b) {
                //              return b.value - a.value;
                //          }))
                symbolSize: function (val) {
                    var r, a, b, a1, b1, p;
                    p = 2;
                    a1 = 6;
                    b1 = 1;
                    a = 40;
                    b = 1;
                    r = (val[2] > 40) ? 40 : val[2];
                    r = ((r - a) * (b1 - a1) / (b - a) + a1) * p;
                    if (r < 1) r = 1;
                    return r;
                },
                tooltip: {
                    formatter: function (t) {
                        return t.name + ":" + t.value[2] + "人";
                    }
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                }
            }, {
                name: 'Top 50',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [],
                //          convertData(dataTime.dianliang.data.sort(function (a, b) {
                //              return b.value - a.value;
                //          }).slice(0, 11)),
                symbolSize: function (val) {
                    var r, a, b, a1, b1, p;
                    p = 2;
                    a1 = 6;
                    b1 = 1;
                    a = 40;
                    b = 1;
                    r = (val[2] > 40) ? 40 : val[2];
                    r = ((r - a) * (b1 - a1) / (b - a) + a1) * p;
                    if (r < 1) r = 1;
                    return r;
                },
                tooltip: {
                    formatter: function (t) {
                        return t.name + ":" + t.value[2] + "人";
                    }
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,

                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#611A85',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    }
    myeChart.setOption(option);

    function eChartInit(time) {
        var flag = eval('(' + dataJson + ')');
        var dataTime = flag[time],
            geoCoordMap6 = dataTime.dianliang.geoCoordMap,
            BJData6 = dataTime.province.BJtoData;
        var convertData6 = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap6[dataItem[1].name];
                var toCoord = geoCoordMap6[dataItem[0].name];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = dataTime.dianliang.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        if (dataTime.province.data != null) {
            option.series[0].data = dataTime.province.data;
        }
        if (BJData6 != null) {
            option.series[1].data = convertData6(BJData6);
            option.series[2].data = BJData6.map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap6[dataItem[0].name].concat([dataItem[0].value])
                };
            })
        }
        if (dataTime.dianliang.data != null) {
            option.series[3].data = convertData(dataTime.dianliang.data.sort(function (a, b) {
                return b.value - a.value;
            }));
            option.series[4].data = convertData(dataTime.dianliang.data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 11))
        }
        myeChart.setOption(option);
    }
    //筛选
    $(document).on('change', '#sel_upload_projects', function () {
        searchParam.projectId = $(this).val();
        searchParam.subProjectId = 0;
        helper.bindPeriod($(this).val());
        helper.getList();
        $("#experList").html("");
        helper.getExperList(true);
    });
    $(document).on('change', '#sel_upload_periods', function () {
        searchParam.subProjectId = $(this).val();
        helper.getList();
        $("#experList").html("");
        helper.getExperList(true);
    });
    var searchParam = {
        projectId: 0,
        subProjectId: 0
    };
    var helper = {
        projects: [],
        init: function () {
            helper.getProjects();
        },
        getProjects: function () {
            req.get('/PivoitProject/GetMapProjectPeriods', null, function (res) {
                if (res.code == 0) {
                    if (res.data.length > 0) {
                        $("#proFilter").removeClass("hidden")
                        helper.projects = res.data;
                        var html = '';
                        for (var i = 0; i < res.data.length; i++) {
                            html += '<option value="' + res.data[i].id + '">' + res.data[i].name + '</option>';
                        }
                        $('#sel_upload_projects').append(html);
                        searchParam.projectId = res.data[0].id;
                        helper.bindPeriod(res.data[0].id);
                        helper.getList();
                        helper.getExperList(true);
                    } else {
                        domApp.notice('暂无已出行项目组');
                    }
                } else {
                    domApp.alert('加载项目信息失败');
                }
            });
        },
        bindPeriod: function (val) {
            if (val == 0) {
                return $('#span_periods').addClass();
            }
            $("#span_periods").removeClass("hidden")
            var p = helper.projects.filter(function (item, i) {
                return item.id == val;
            });
            if (p.length) {
                var p1 = p[0];
                var html = '<option value="0">所有届别</option>';
                for (var i = 0; i < p1.periods.length; i++) {
                    html += '<option value="' + p1.periods[i].id + '">' + p1.periods[i].name + '</option>';
                }
                $('#sel_upload_periods').html(html);
            }
        },
        getList: function () {
            domApp.showIndicator();
            req.get('/PivoitProject/GetProjectPivot', { proId: searchParam.projectId, subProId: searchParam.subProjectId }, function (res) {
                domApp.hideIndicator();
                if (res.code == 0 && res.data.length > 0) {
                    var data = res.data;
                    dataJson = data;
                    eChartInit('all')
                } else {
                    domApp.notice(res.msg);
                }
            })
        },
        getExperList: function (dec) {
            clearInterval(dt);
            var lastId = $('.character-list .character-item:first-child').attr("data-id");
            var lastExperId = (lastId == undefined || lastId == "undefined") ? 0 : lastId;
            req.get('/PivoitProject/story', { projectId: searchParam.projectId, subProjectId: searchParam.subProjectId, lastExperId: lastExperId }, function (res) {
                if (res.code == 0 && res.data.list != null && res.data.list.length > 0) {
                    dd = res.data.list;
                    if (dec) {
                        $('#experList').html($('#exper_tpl').render(dd));
                    } else {
                        $('.character-list .character-item:first-child').before($('#exper_tpl1').render(dd));
                        setTimeout(function () {
                            $('.character-list .character-item').removeClass('translate')
                        }, 50)
                    }
                }
                dt = setInterval(function () {
                    helper.getExperList(false);
                }, 2000)
            })
        }
    };
    helper.init();
})