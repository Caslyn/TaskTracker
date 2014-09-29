TaskTracker.Views.ProjectIndex = Backbone.View.extend({
	template: JST["projects/index"],

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function() {
		var renderedContent = this.template({
			projects: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
})