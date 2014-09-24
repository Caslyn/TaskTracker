TrelloClone.Views.StoryShow = Backbone.View.extend({
	template: JST['stories/show'],

	render: function() {
		var renderedContnt = this.template({
			story: this.model
		});
		this.$el.html(content);
		return this;
	}
})