TaskTracker.Views.TrackerShow = Backbone.CompositeView.extend({
	template: JST['trackers/show'],

	orderOptions: {
		modelElement: '.story-display',
		modelName: 'story'
	},

	events: {
		"click .add-story" : "renderStoryForm",
		"sortreceive": "receiveStory",
		"sortstop" : "saveOrds",
	},

	initialize: function(options) {
		this.project = options.project;
		this.collection = this.model.stories();

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.collection, 'remove change', this.render);
		this.listenTo(this.collection, 'add', this.addStory);
	},
 
	data: function(){
		return {
			'tracker-id': this.model.id, 
		};
	},

	parseView: function(view) {
		if (!this.model.attributes.visible) {
			return view.replace('active', 'hidden')
		} else {
			return view
		}
	},
	render: function() {
		var displayWeek = this.displayWeek();
		var pointTotal = this.sumPoints();
		var renderedContent = this.template({ 
			tracker: this.model, 
			collection: this.collection,
			week: displayWeek,
			points: pointTotal,
		});

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

	sumPoints: function() {
		var sum = 0;
		this.collection.each(function(story) {
			if (story.get('points') === null) {
				sum += 0;
			} else {
				sum += parseInt(story.get('points'));
			}
		});

		var noun = sum != 1 ? "Points" : "Point"
		if (this.collection.length > 0) {
			return "<p class='showPoints'>" + sum + " " + noun + "</p>";
		}
	},

	displayWeek: function() {
		var startTime = this.project.get('created_at') || this.model.get('created_at');
		var startDate = new Date(startTime)
		var todayDate = new Date();
		var day = todayDate.toString().slice(4, 11)

		var oneDay = 24*60*60*1000;	// hours*minutes*seconds*milliseconds

		var diffDays = Math.abs((todayDate.getTime() - startDate.getTime())/(oneDay));
		var weekNum = Math.floor(diffDays / 7) + 1;

		if (this.collection.length > 0) {
			return "<p class='showWeek'>week " + weekNum + " | " + day + "</p>";
		} 
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
		this.onRender();
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
		var week = this.displayWeek();
		var points = this.sumPoints();
		var newStoryView = new TaskTracker.Views.StoryShow({
			model: story,
			week: week,
			points: points,
		}).render();
		//insert this new view's $el after the ghost
		newStoryView.$el.insertAfter(ghost);
		//and add this view to the array of subviews
		this.subviews('.story-wrapper').push(newStoryView);
		//then remove the ghost
		ghost.remove();
		//then update the ords
		this.saveOrds();
		this.render();
	},
});
