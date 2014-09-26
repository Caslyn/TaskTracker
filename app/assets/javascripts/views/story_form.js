TaskTracker.Views.StoryForm = Backbone.View.extend({
	template: JST['stories/form'],

	events: {
		"click #create-story": "submit"
	},

	render: function() {
		var renderedContent = this.template({
			story: this.model
		});
		this.$el.html(renderedContent);
		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var title = this.$('#story-title-input').val();
		var description = this.$('#story-desc-input').val();
		var params = {
			title: title,
			description: description,
			project_id: this.collection.project.id,
			tracker: 'icebox',
			ord: 0,
		};
		this.model.set(params);
		this.collection.create(this.model, {
			wait: true
		});
	}
})