TaskTracker.Views.StoryForm = Backbone.LinkFormView.extend({
	formTemplate: JST['stories/form'],

	events: {
		"click .close": "remove",
		"click .delete-story": "destroyStory",
		"click .create": "submit"
	},

	render: function() {
		var renderedContent = this.formTemplate({ model: this.model });
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var title = this.$('#story-title').val() || this.model.get('title');
		var description = this.$('#description').val() || this.model.get('description');
		if (this.model.isNew()) {
			var trackerId = this.collection.tracker.id;		
			this.collection.create({
				title: title,
				description: description,
				tracker_id: trackerId
			}, { wait: true });
		} else {
			this.model.save({
				title: title,
				description: description
			}, { wait: true })
		}
		
		this.$('#story-title').val('');
		this.$('#story-description').val('');
		this.remove();
	},

	destroyStory: function() {
		this.model.destroy();
	}
});