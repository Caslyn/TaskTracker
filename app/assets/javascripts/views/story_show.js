TaskTracker.Views.StoryShow = Backbone.View.extend({
	template: JST['stories/show'],

	events: {
		"click button.destroy": "destroyStory"
	},

	render: function() {
		var renderedContent = this.template({
			story: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},

	destroyStory: function(event) {
		event.preventDefault();
		this.model.destroy();
	}
})