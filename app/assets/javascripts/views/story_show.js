TaskTracker.Views.StoryShow = Backbone.View.extend({
	template: JST['stories/show'],

	render: function() {
		var renderedContent = this.template({
			story: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
})