TaskTracker.Routers.Router = Backbone.Router.extend({
	routes: {
		"" : "dashboard",
		"projects": "index",
		"projects/new" : "create",
		"projects/:id": "show"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl
	},

	dashboard: function() {
		TaskTracker.Collections.projects.fetch();
		var dashboardView = new TaskTracker.Views.Dashboard({
			collection: TaskTracker.Collections.projects
		});
		this._swapView(dashboardView);
	},

	index: function() {
		TaskTracker.Collections.projects.fetch();
		var indexView = new TaskTracker.Views.ProjectIndex({
			collection: TaskTracker.Collections.projects
		});
		this._swapView(indexView);
	},

	create: function() {
		var newProject = new TaskTracker.Models.Project();
		var newView = new TaskTracker.Views.ProjectForm({
			collection: TaskTracker.Collections.projects,
			model: newProject,
		});
		this._swapView(newView);
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