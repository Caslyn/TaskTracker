TaskTracker.Routers.Router = Backbone.Router.extend({
	routes: {
		"" : "homepage",
		"projects": "index",
		"projects/:id": "show"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	homepage: function() {
		var homeView = new TaskTracker.Views.HomePage({});
		this._swapView(homeView);
	},

	index: function() {
		TaskTracker.Collections.projects.fetch();
		var indexView = new TaskTracker.Views.ProjectsIndex({
			collection: TaskTracker.Collections.projects
		});
		this._swapView(indexView);
	},

	show: function(id) {
		var project = TaskTracker.Collections.projects.getOrFetch(id);
		var showView = new TaskTracker.Views.ProjectShow({
			model: project
		});
		this._swapView(showView);
	},

	_swapView: function(view) {
		this.currentView && this.currentView.remove();
		this.currentView = view
		this.$rootEl.html(view.render().el);
	}
})