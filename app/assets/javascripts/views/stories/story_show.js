TaskTracker.Views.StoryShow = Backbone.CompositeView.extend({
	template: JST['stories/show'],

	attributes: function(){
		return {
			'data-tracker-id': this.model.get('tracker_id'),
			'data-story-id': this.model.id
		};
	},

	events: {
		"click .edit-story": "toggleEdit",
		"click .show-modal": "showModal"
	},

	toggleEdit: function(event) {
		event.preventDefault();
		var storyView = new TaskTracker.Views.StoryForm({ 
			model: this.model 
		});
		this.$el.append(storyView.render().$el);
		this.$('.story-title').hide();
		this.$(storyView.$el).on('remove', this.render.bind(this));
	},

	render: function() {
		var renderedContent = this.template({ story: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	showModal: function (event) {
		event.preventDefault();
		this.$('.modal').modal();
	}
})