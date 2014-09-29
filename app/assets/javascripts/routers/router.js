TaskTracker.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "dashboard",
    // "home" : "home",
    "projects": "projectIndex",
    "projects/new" : "projectCreate",
    "projects/:id": "projectShow"
  },


  initialize: function(options) {
    this.$rootEl = options.$rootEl
  },
    
  // home: function() {
  //   var homeView = new TaskTracker.Views.HomeView();
  //   this._swapView(homeView);
  // },

  dashboard: function() {
    TaskTracker.Collections.projects.fetch();
    var dashboardView = new TaskTracker.Views.Dashboard({
      collection: TaskTracker.Collections.projects
    });
    this._swapView(dashboardView);
  },

  projectIndex: function() {
    TaskTracker.Collections.projects.fetch();
    var indexView = new TaskTracker.Views.ProjectIndex({
      collection: TaskTracker.Collections.projects
    });
    this._swapView(indexView);
  },

  projectCreate: function() {
    var newProject = new TaskTracker.Models.Project();
    var newView = new TaskTracker.Views.ProjectForm({
      collection: TaskTracker.Collections.projects,
      model: newProject,
    });
    this._swapView(newView);
  },

  projectShow: function(id) {
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
    view.onRender && view.onRender();
  }
})