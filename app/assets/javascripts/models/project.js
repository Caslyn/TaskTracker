TaskTracker.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	trackers: function() {
		if (!this._trackers) {
			this._trackers = new TaskTracker.Collections.Trackers([], { project : this })
		}
		return this._trackers;
	},

	parse: function(response) {
		if (response.trackers) {
			this.trackers().set(response.trackers, { parse : true });
			delete response.trackers;
		}
		return response;
	}
});