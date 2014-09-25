TaskTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST["projects/show"],

	events: {
		"click .tracker-btn": "toggleView"
	},

	initialize: function() {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'add sync', this.render);
		this.listenTo(this.collection, 'add', this.renderStories);
	},

	setViews: function() {
		for (var key in window.localStorage) {
			var $trackerBox = $('.tracker-container').find('.' + key);
			$trackerBox.addClass('hidden');
		}
	},

	toggleView: function(event) {

		event.preventDefault;
		var $trackerId = $(event.currentTarget).attr('id');
		var $trackerBox = $('.tracker-container').find('.' + $trackerId)

		if (window.localStorage.getItem($trackerId)) {
			window.localStorage.removeItem($trackerId);
			$trackerBox.removeClass('hidden');
		} else {
			window.localStorage.setItem($trackerId, 'hidden');
			$trackerBox.addClass('hidden');
		}
	},

	// Consider subviews
	render: function() {
		var renderedContent = this.template({
			project: this.model
		});
		this.$el.html(renderedContent);
		this.setViews();
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