TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	template: JST['trackers/show'],

	orderOptions: {
		modelElement: '.story-display',
		modelName: 'story'
	},

	events: {
		"click .add-story" : "renderStoryForm",
		"sortremove": "removeStory",
		"sortreceive": "receiveStory",
		"sortstop" : "saveStories",
	},

	initialize: function() {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.collection, 'add', this.addStory);
		this.listenTo(this.collection, 'remove', this.render);
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

	onRender: function() {
		this.$('.story-wrapper').sortable({ 
			connectWith: '.story-wrapper'
		});
	},

	renderStoryForm: function(event) {
		event.preventDefault();
		// do not render story form twice
		if (this.$('.story-form').html() !== "") {
			return;
		}

		var storyForm = new TaskTracker.Views.StoryForm({
			model: new TaskTracker.Models.Story(),
			collection: this.collection
		});

		this.$('.story-form').html(storyForm.render().$el);
	},

	removeForm: function(form) {
		this.removeSubview('.story-form', form);
	},
	renderStories: function() {
		this.model.stories().each(this.addStory.bind(this));
	},

	addStory: function(story) {
		var newStoryView = new TaskTracker.Views.StoryShow({
			model: story
		});
		this.addSubview('.story-wrapper', newStoryView);
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
		this.saveOrds(event);
	},
});
