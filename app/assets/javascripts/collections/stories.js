TaskTracker.Collections.Stories = Backbone.Collection.extend({
	model: TaskTracker.Models.Story,
	url: '/api/stories',

	initialize: function (models, options) {
		this.tracker = options.tracker;
	},

	comparator: function() {
		return this.get('ord');
	},

	getOrFetch: function(id) {
		var story = this.get(id);
		var stories = this;
		if (!story) {
			story = new TaskTracker.Models.Story({ id: id });
			story.fetch({
				success: function() { stories.add(story) }
			});
		} else {
			story.fetch();
		}
		return story;
	},
})