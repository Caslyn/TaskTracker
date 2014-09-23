TaskTracker.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	// all of the project's stories
	stories: function() {
	},
	// fills up #stories  
	parse: function() {

	},

	// methods which return all stories associated with a tracker
	done: function() {},
	current: function() {},
	backlog: function() {},
	icebox: function() {}
})