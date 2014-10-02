TaskTracker.Views.Dashboard = Backbone.CompositeView.extend({
	template: JST["dashboard"],

	events: {
		"click button.destroy": "removeProject",
		"click #create-project": "showModal",
	},

	initialize: function() {
		this.listenTo(this.collection, 'sync destroy', this.render);
	},

	render: function() {
		var renderedContent = this.template({ collection: this.collection });
		this.$el.html(renderedContent);
		return this
	},

	removeProject: function(event) {
		event.preventDefault();
		var $currentTarget = $(event.currentTarget).data('id');
		var model = this.collection.get($currentTarget);
		model.destroy({ wait: true });
		this.collection.fetch();
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

});





