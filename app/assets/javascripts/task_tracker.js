window.TaskTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new TaskTracker.Routers.Router({ $rootEl: $('div#main') });
  	Backbone.history.start();
  	// Create Default Trackers
  }
};

$(document).ready(function(){
  TaskTracker.initialize();
});
