TaskTracker.Views.StoryForm = Backbone.LinkFormView.extend({
		formTemplate: JST['stories/form'],

		render: function() {
			var renderedContent = this.formTemplate();
			this.$el.html(renderedContent);
			this.delegateEvents();
			return this;
		},

		create: function(event) {
			event.preventDefault();
			var title = this.$('#story-title').val();
			var description = this.$('#story-description').val();
			var trackerId = this.collection.tracker.id;

			this.collection.create({
				title: title,
				description: description,
				tracker_id: trackerId
			}, { wait: true });
			this.$('#story-title').val('');
			this.$('#story-description').val('');
			this.trigger('remove', this);
		}
});