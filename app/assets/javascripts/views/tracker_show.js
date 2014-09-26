TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	template: JST['trackers/show'],

	initialize: function() {
		// this.collection: this.model.stories();
		this.listenTo(this.model, 'change:title', this.render);
		// this.listenTo(this.collection, 'add', this.addStory);
		// this.listenTo(this.collection, 'add resize', this.setHeight);

	},

	render: function() {
		var renderedContent = this.template({
			tracker: this.model
		});
		this.$el.html(renderedContent);
		this.$el.data('tracker-id', this.model.id);
		return this;

		// this.renderStories();
		// setTimeout(this.setHeight.bind(this));
	},

	addStory: function(story) {},
	renderStories: function() {},
	setHeight: function() {},
});