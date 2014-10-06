TaskTracker.Views.ProjectForm= Backbone.View.extend({
	template: JST['projects/form'],

	events: {
		"click button": "submit",
	},

	render: function() {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	seedTrackers: function() {
		trackers = arguments[0];
		defaultTrackers = ["done", "current", "backlog", "icebox"];
		for (var i = 0; i < defaultTrackers.length; i++) {
			trackers.create({ project_id: this.model.id, title: defaultTrackers[i],
												visible: true, ord: i}, { wait: true });
		};
	 },

	submit: function(event) {

		var title = this.$('#title-input').val();
		var description = this.$('#description-input').val();
		var params = {
			title: title,
			description: description
		}

		function success() {
			var collection = this.model.trackers();
			this.seedTrackers.apply(this, [collection]);
			$('.project-modal').modal('hide');
		};
		this.model.set(params);
		debugger;
		this.collection.create(this.model, {success: success.bind(this) });
	},
});

