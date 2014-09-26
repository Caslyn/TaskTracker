TaskTracker.Collections.Trackers = Backbone.Collection.extend({
	model: TaskTracker.Models.Tracker,
	url: '/api/trackers',

	initialize: function (models, options) {
		this.project = options.project
	},

	getOrFetch: function(id) {
		var tracker = this.get(id);
		var trackers = this;
		if (!tracker) {
			tracker = new TaskTracker.Models.tracker({ id: id });
			tracker.fetch({
				success: function() { trackers.add(tracker) }
			});
		} else {
			tracker.fetch();
		}
		return tracker;
	}
	
});