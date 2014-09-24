TaskTracker.Views.HomePage = Backbone.View.extend({
	template: JST["homepage"],

	render: function() {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		return this;
	}
})