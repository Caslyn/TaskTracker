TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	orderOptions: {
		modelElement: '.story-display',
		modelName: 'story'
	},

	template: JST['trackers/show'],

	className: 'story-display',

	events: {
		"click .add-story" : "renderStoryForm",
		"sortremove": "removeStory",
		"sortstop" : "saveStories",
	},

	initialize: function() {
		// Find out how to sort stories between trackers & within trackers
		this.collection = this.model.stories();
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.collection, 'add', this.addStory);	
	},

	data: function(){
		return {'tracker-id': this.model.id};
	},

	parseView: function(view) {
		if (!this.model.attributes.visible) {
			return view.replace('active', 'hidden')
		} else {
			return view
		}
	},
	render: function() {
		var renderedContent = this.template({ tracker: this.model });
		renderedContent = this.parseView(renderedContent);
		this.$el.html(renderedContent);
		this.delegateEvents();
		this.renderStories();
		return this;
	},

	renderStoryForm: function(event) {
		event.preventDefault();
		var storyForm = new TaskTracker.Views.StoryForm({
			collection: this.collection
		});
		this.addSubview('.story-form', storyForm)
	},

	renderStories: function() {
		this.model.stories().each(this.addStory.bind(this));
		this.$('.story-wrapper').sortable({ 
			connectWith: '.story-wrapper'
		})
	},

	addStory: function(story) {
		var newStoryView = new TaskTracker.Views.StoryShow({
			model: story
		});
		this.addSubview('.story-wrapper', newStoryView)
	},

	receiveStory: function(event, ui) {
		var $storyDisplay = ui.item;
		var storyId = $storyDisplay.data('story-id');
		var newOrd = $storyDisplay.index();
		var storyClone = new TaskTracker.Models.Story({
			id: storyId,
			tracker_id: this.model.id,
			ord: newOrd
		});
		storyClone.save();
		this.collection.add(storyClone, { silent: true });
		this.saveStories(event);
	},

	removeStory: function(event, ui) {
		var $story = ui.item;
		var storyId = $story.data('story-id');
		var stories = this.collection;
		var storyToRemove = stories.get(storyId);
		stories.remove(storyToRemove);
	},

	saveStories: function(event) {
		event.stopPropagation();
		this.saveOrds();
	},
});

// _.extend(TaskTracker.Views.ProjectShow.prototype, Backbone.OrdView);
