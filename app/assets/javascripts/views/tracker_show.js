TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	data: function(){
		return {'tracker-id': this.model.id};
	},

	className: function(){
		if(this.model.get('hidden')){
			return "tracker-hidden";
		} else {
			return "";
		}
	},

	template: JST['trackers/show'],

	events: {
		"click .add-story" : "renderStoryForm", 
	},

	initialize: function() {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'change:title', this.render);
		this.listenTo(this.collection, 'add', this.addStory);		
	},

	render: function() {
		var renderedContent;
		renderedContent = this.template({ tracker: this.model });
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
		// this.$('.story-box').sortable( {connectWith: '.story-box'});
	}
});
