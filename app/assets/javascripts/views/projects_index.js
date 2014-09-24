TaskTracker.Views.ProjectsIndex = Backbone.View.extend({
	template: JST["projects/index"],

	events: {},

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);

    $('body').css('background-color', '#eeeeee');
    $('.navbar').css({'background-color':'#6096bd'});
    $('a').css({'color': 'white'});

	},

	render: function() {
		var renderedContent = this.template({
			collection: this.collection
		});
		this.$el.html(renderedContent);
		return this
	}
})