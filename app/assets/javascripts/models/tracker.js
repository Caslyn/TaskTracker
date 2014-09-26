TaskTracker.Models.Tracker = Backbone.Model.extend({
	urlRoot: '/api/trackers',

	stories: function() {
		if (!this._stories) {
			this._stories = new TaskTracker.Collections.Stories([], { tracker : this});
		}
		return this._stories;
	},

	parse: function(response) {
		if (response.stories) {
			this.stories().set(response.stories, { parse: true });
			delete response.stories;
		}
		return response;
	},

});