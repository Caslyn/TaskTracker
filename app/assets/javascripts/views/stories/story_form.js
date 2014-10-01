TaskTracker.Views.StoryForm = Backbone.LinkFormView.extend({
	formTemplate: JST['stories/form'],

	events: {
		"click .close-form": "remove",
		"click .delete-story": "destroyStory",
		"click .create": "submit",
	},

	render: function() {
		var header = this.modelCheck(this.model)["header"];
		var action = this.modelCheck(this.model)["action"];
		var title = this.modelCheck(this.model)["title"];
		var description = this.modelCheck(this.model)["description"];
		var renderedContent = this.formTemplate({ 
			model: this.model,
			title: title, 
			description: description,
			header: header,
			action: action,
		});
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	},

	modelCheck: function(model) {
		if (model.isNew()) {
			return { header: "Create Story", action: "Save" };
		} else {
			return { header: "Edit Story", action: "Update", 
							 description: model.attributes.description,
							 title: model.attributes.title };
		}
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