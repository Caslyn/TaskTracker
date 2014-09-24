TaskTracker.Collections.Stories = Backbone.Collection.extend({
	model: TaskTracker.Models.Story,
	url: '/api/stories',

	initialize: function (models, options) {
		this.project = options.project
	}
})