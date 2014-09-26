TaskTracker.Collections.Trackers = Backbone.Collection.extend({
	model: TaskTracker.Models.Tracker,
	url: '/api/trackers',

	initialize: function (models, options) {
		this.project = options.project
	}
	
});