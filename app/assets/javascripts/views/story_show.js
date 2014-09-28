TaskTracker.Views.StoryShow = Backbone.View.extend({
	template: JST['stories/show'],

	events: {
		// 'click': 'showModal'
	},

	initialize: function() {
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

	// showModal: function() {
	// 	this.modalView = this.modalView || 
	// 	new TaskTracker.Views.StoryModal({ model: this.model });
	// 	$('body').prepend(this.modalView.render().$el);
	// 	this.modalView.delegateEvents();
	// }
})