TaskTracker.Views.ProjectsIndex = Backbone.View.extend({
	template: JST["projects/index"],

	events: {},

	initialize: function() {},

	render: function() {
		var renderedContent = this.template({
			collection: this.collection
		});
		this.$el.html(renderedContent);
		return this
	}
})