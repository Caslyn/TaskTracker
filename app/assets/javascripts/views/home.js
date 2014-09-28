TaskTracker.Views.HomeView = Backbone.View.extend({
	template: JST["home/home"],

	initialize: function() {
		this.render;
		this.timedShuffle();
	},

	render: function() {
		var renderedContent = this.template();
		this.timedShuffle(renderedContent)
		this.$el.html(renderedContent);
		return this;
	},

	timedShuffle: function(content) {
		// shuffle contents of content
	}
});

  