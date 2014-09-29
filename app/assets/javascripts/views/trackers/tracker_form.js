TaskTracker.Views.TrackerForm = Backbone.LinkFormView.extend({
	formTemplate: JST['trackers/form'],
	className: 'col-md-3',

	create: function(event) {
		event.preventDefault();
	
		this.collection.create({
			title: this.$('textarea').val(),
			project_id: this.collection.project.id
		}, { wait: true });
		this.$('textarea').val('');
		this.$('textarea').focus();
	},

	render: function() {
		var renderedContent = this.formTemplate();
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	}
});