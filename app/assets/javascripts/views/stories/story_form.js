TaskTracker.Views.StoryForm = Backbone.LinkFormView.extend({
	formTemplate: JST['stories/form'],

	events: {
		"click .close-form": "remove",
		"click .delete-story": "destroyStory",
		"click .create": "submit",
	},

	render: function() {
		var renderedContent = this.formTemplate({ model: this.model });
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var title = this.$('#title-input').val() || this.model.get('title');
		var description = this.$('#description-input').val() || this.model.get('description');
		var points = parseInt(this.$('#point-picker').val()) || this.model.get('points');
		var type = this.$('#type-picker').val() || this.model.get('story_type');

		if (this.model.isNew()) {
			var trackerId = this.collection.tracker.id;		
			this.collection.create({
				title: title,
				description: description,
				points: points,
				story_type: type,
				tracker_id: trackerId,
			}, { wait: true });
		} else {
			this.model.save({
				title: title,
				description: description,
				points: points,
				story_type: type,
			}, { wait: true })
		}
		this.remove();
	},

	destroyStory: function() {
		this.model.destroy();
	},

});