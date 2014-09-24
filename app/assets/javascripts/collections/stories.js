TaskTracker.Collections.Stories = Backbone.Collection.extend({
	model: TaskTracker.Models.Story,
	url: '/api/stories',

	initialize: function (models, options) {
		this.project = options.project
	},

	getOrFetch: function(id) {
		var story = this.get('id');
		var stories = this;
		if (!story) {
			var story = new TaskTracker.Models.story({ id: id });
			story.fetch({
				success: function() { stories.add(story) }
			});
		} else {
			story.fetch()
		}
		return story;
	}
});
