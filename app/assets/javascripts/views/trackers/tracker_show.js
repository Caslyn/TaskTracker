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
		// in addition to remove from collection, remove from subview
		this.listenTo(this.collection, 'remove', this.render);
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
		// should not keep adding views - just reattach subviews you already have
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
		var oldTrackerId = $storyDisplay.data('tracker-id');
		var oldStories = this.model.collection.get(oldTrackerId).stories();
		var story = oldStories.get(storyId);
		oldStories.remove(story);
		story.set('tracker_id', this.model.id);

		var successCallback = function(){
			this.surgicallyInsertStory(story, $storyDisplay)
		}
		story.save({},{
			success: successCallback.bind(this)
		})
	},

	surgicallyInsertStory: function(story, ghost){
		//we use silent because we don't want the view's automatic
		//addStory method to be called
		this.collection.add(story, { silent: true });
		//create a new view for the story we are adding
		var newStoryView = new TaskTracker.Views.StoryShow({
			model: story
		}).render();
		//insert this new view's $el after the ghost
		newStoryView.$el.insertAfter(ghost);
		//and add this view to the array of subviews
		this.subviews('.story-wrapper').push(newStoryView);
		//then remove the ghost
		ghost.remove();
		//then update the ords using saveStories
		this.saveStories();
	},

	saveStories: function(event) {
		this.saveOrds(event);
	},
});
