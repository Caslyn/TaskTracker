TaskTracker.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	// all of the project's stories
	stories: function() {
		if (!this._stories) {
			this._stories = new TaskTracker.Collections.Stories([], { project: this });
		}
		return this._stories;
	},
	// fills up #stories  
	parse: function(response) {
		if (response.stories) {
			this.stories().set(response.stories, { parse : true });
			delete response.stories;
		}
		return response;
	},

	// methods which return all stories associated with a tracker
	done: function() {
		return this.stories().where({ tracker: "done" });
	},
	current: function() {
		return this.stories().where({ tracker: "current" });
	},
	backlog: function() {
		return this.stories().where({ tracker: "backlog" });	
	},
	icebox: function() {
		return this.stories().where({ tracker: "icebox" });
	}
})