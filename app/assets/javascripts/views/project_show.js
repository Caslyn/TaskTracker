TaskTracker.Views.ProjectShow = Backbone.View.extend({
	template: JST["projects/show"],

	initialize: function() {
		this.listenTo(this.model, "add sync", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			project: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
})