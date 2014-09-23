TaskTracker.Collections.Projects = Backbone.Collection.extend({
	model: TaskTracker.Models.Project,
	url: "/api/projects",

	getOrFetch: function(id) {
		var project = this.get('id');
		var projects = this;
		if (!project) {
			var project = new TaskTracker.Models.Project({ id: id });
			project.fetch({
				success: function() { projects.add(project) }
			});
		} else {
			project.fetch()
		}
		return project;
	}
})

TaskTracker.Collections.projects = new TaskTracker.Collections.Projects();