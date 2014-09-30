TaskTracker.Views.StoryShow = Backbone.View.extend({
	template: JST['stories/show'],

	events: {
		"click .title": "toggleEdit",
	},

	toggleEdit: function(event) {
		event.preventDefault();
		var storyView = new TaskTracker.Views.StoryForm({model: this.model});
		this.$el.append(storyView.render().$el);
		this.$('.story-title').hide();
		this.$(storyView.$el).on('remove', this.render.bind(this));
	},

	attributes: function() {
		return {
			'data-story-id': this.model.id
		}
	},

	render: function() {
		var renderedContent = this.template({
			story: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},
})