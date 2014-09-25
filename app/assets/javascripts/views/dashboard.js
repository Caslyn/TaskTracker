TaskTracker.Views.Dashboard = Backbone.View.extend({
	template: JST["dashboard"],

	events: {
		"click button.destroy": "removeProject"
	},

	initialize: function() {
		this.listenTo(this.collection, 'sync destroy', this.render);
	},

	render: function() {
		var renderedContent = this.template({
			collection: this.collection
		});
		this.$el.html(renderedContent);
		return this
	},

	removeProject: function(event) {
		event.preventDefault();
		var $currentTarget = $(event.currentTarget).data('id');
		var model = this.collection.get($currentTarget);
		model.destroy();
	}
})