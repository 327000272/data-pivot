export default {
	data() {},
	methods: {
		a_cm_recursion: function(path, auths) {
			let this_ = this,
				len = auths.length;
			for(var i = 0; i < len; i++) {
				if(auths[i].perUrl === path)
					return auths[i];
			}
		},
		a_cm_queryAuth: function(path, auths) {
			var router = undefined,
				child = undefined;
			let pathArray = path.trim().split('/'),
				len = pathArray.length;
			for(var i = 1; i <= len; i++) {
				router = '/' + pathArray.slice(1, i + 1).join('/');
				if(auths.children)
					auths = this.a_cm_recursion(router, auths.children);
				else
					auths = this.a_cm_recursion(router, auths);
				child = auths.children;
				if(child.length == 0)
					return [];
				if(child[0].perType == 2 && auths.perType == '1')
					return child;
			}
		},
		a_cm_remove: function(path, menus, auths) {
			var array = [];
			let len = menus.length,
				authority = this.a_cm_queryAuth(path, auths);

			for(var i in authority)
				array.push(authority[i].perUrl);

			for(var i = 0; i < len; i++) {
				console.info('------------' + i + '-------------');
				console.info(array.indexOf(menus[i]) >= 0);
				if(array.indexOf(menus[i]) >= 0)
					continue;
				else {
					console.info('------------delete-------------');
					this.$refs[menus[i]].$el.remove();
				}
			}
			/*for(var i in authority)
			    console.info(menus)
			    console.info(authority[i])
			    console.info(menus.indexOf(authority[i].path))
			    if(menus.indexOf(authority[i].path) < 0)
			        this.$refs[authority[i].path].$parent.$el.remove();
			*/
		}
	},
	mounted() {
		var authority = sessionStorage.getItem('menus'),
			menus = this.layout_menus;
		this.a_cm_remove(this.$route.fullPath, menus, JSON.parse(authority));
	}
}