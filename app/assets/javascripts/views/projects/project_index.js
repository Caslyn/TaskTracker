TaskTracker.Views.ProjectIndex = Backbone.View.extend({
	template: JST["projects/index"],

	events: {
		"click .create-project": "showModal"
	},

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function() {
		var renderedContent = this.template({
			projects: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	},

	showModal: function(event) {
		event.preventDefault();
		this.$('.modal').modal();
		if ($('.modal-body').html() != "") {
			return; 
		} else {
	    var newProject = new TaskTracker.Models.Project();
			var projectForm = new TaskTracker.Views.ProjectForm({
				collection: this.collection,
				model: newProject,
			});
			this.$('.modal-body').append(projectForm.render().$el);
		}
	},
})