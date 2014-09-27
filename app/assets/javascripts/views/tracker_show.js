TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	data: function(){
		return {'tracker-id': this.model.id};
	},

	template: JST['trackers/show'],

	events: {
		"click .add-story" : "renderStoryForm", 
	},

	initialize: function() {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.collection, 'add', this.addStory);	
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

	addStory: function(story) {
		var newStoryView = new TaskTracker.Views.StoryShow({
			model: story
		});
		this.addSubview('.story-box', newStoryView)
	},

	renderStories: function() {
		this.model.stories().each(this.addStory.bind(this));
	}
});
