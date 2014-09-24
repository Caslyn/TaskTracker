TaskTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST["projects/show"],

	initialize: function() {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'add sync', this.render);
		this.listenTo(this.collection, 'add', this.renderStories);
	},

	render: function() {
		var renderedContent = this.template({
			project: this.model
		});
		this.$el.html(renderedContent);
		this.renderStories();
		return this;
	},

	fillIcebox: function() {
		_.each(this.model.icebox(), function(story) {
			var storyView = new TaskTracker.Views.StoryShow({
				model: story
			});
			this.addSubview('#icebox-box', storyView);
		}.bind(this));
	},

	fillBacklog: function() {
		this.model.backlog().forEach(function(story) {
			var storyView = new TaskTracker.Views.StoryShow({
				model: story
			});
			this.addSubview('#backlog-box', storyView);
		});
	},

	fillCurrent: function() {
		this.model.curr().forEach(function(story) {
			var storyView = new TaskTracker.Views.StoryShow({
				model: story
			});
			this.addSubview('#current-box', storyView);
		})
	},

	fillDone: function() {
		this.model.done().forEach(function(story) {
			var storyView = new TaskTracker.Views.StoryShow({
				model: story
			});
			this.addSubview('#done', storyView);
		})
	},

	renderStories: function() {
		this.fillIcebox();
		this.fillBacklog();
		this.fillCurrent();
		this.fillDone();
	}
})