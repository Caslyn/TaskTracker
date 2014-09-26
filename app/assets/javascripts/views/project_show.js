TaskTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST["projects/show"],

	events: {
		"click .tracker-btn": "toggleView",
		"click .add-story" : "showStoryForm"
	},

	initialize: function() {
		this.collection = this.model.stories();
		this.projectId = "project#" + this.model.id;

		this.listenTo(this.model, 'add sync', this.render);
		this.listenTo(this.collection, 'remove', this.removeStory)
		this.listenTo(this.collection, 'add', this.renderStories);

		// populate active tracker divs
		if (window.localStorage.getItem(this.projectId)) {
			this.activeTrackers = window.localStorage.getItem(this.projectId).split(',');
		} else {
			this.activeTrackers = ['icebox','backlog','current'];
		}
	},

	setViews: function() {	
		if (this.activeTrackers.length > 0) {
			this.activeTrackers.forEach(function(trackerId) {
				var $trackerBox = $('.tracker-container').find('.' + trackerId);
				$trackerBox.addClass('active');
			});
		}
	},

	toggleView: function(event) {
		event.preventDefault;
		var trackerId = $(event.currentTarget).attr('id');
		var trackerBox = $('.tracker-container').find('.' + trackerId)
		var tIndex = this.activeTrackers.indexOf(trackerId);

		if (tIndex >= 0) {
			this.activeTrackers.splice(tIndex, 1);
			var updatedTrackers = this.activeTrackers.join(',');
			window.localStorage.setItem(this.projectId, updatedTrackers);
			trackerBox.removeClass('active');
		} else {
			this.activeTrackers.push(trackerId);
			var updatedTrackers = this.activeTrackers.join(',')
			window.localStorage.setItem(this.projectId, updatedTrackers);
			trackerBox.addClass('active');
		}
	},

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
	},

	showStoryForm: function() {
		var newStory = new TaskTracker.Models.Story()
		var newStoryForm = new TaskTracker.Views.StoryForm({
			model: newStory,
			collection: this.collection
		});
		$('#icebox-box').prepend(newStoryForm.render().$el)
	},

	// // adds story show view to page & subviews
	// addStory: function(story) {
	// 	var storyView = new TaskTracker.Views.StoryShow({
	// 		model: story
	// 	});
	// 	// remove storyView
	// 	this.addSubview('#icebox-box', storyView);
	// },

	removeStory: function(story) {
		var storyContainer = $('.story-container').children()
		for (var i = 0; i < storyContainer.length; i++) {
			var trackerBox = storyContainer[i].id;
			var selector = this.subviews()['#' + trackerBox]
			if (selector) {
				var storyView = _.find(selector, function(subview) {
					return subview.model == story 
				});
			}
		}
		this.removeSubview('#' + trackerBox, storyView);
	}
})













