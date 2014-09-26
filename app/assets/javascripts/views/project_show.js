TaskTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST["projects/show"],

	events: {
		"click .tracker-btn": "toggleTracker",
		"click .create-tracker" : "renderTrackerForm",
	},

	initialize: function() {
		this.collection = this.model.trackers();
		
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addTracker);
		this.listenTo(this.collection, 'remove', this.removeTracker);

	},

	render: function() {
		var renderedContent = this.template({ project: this.model }); 
		this.$el.html(renderedContent);
		this.renderTrackers();
		return this;
	},

	toggleTracker: function(event) {
		event.preventDefault();
		var $currentTarget = $(event.currentTarget);
		var trackerName = $currentTarget.attr('id');
		var trackerView = $('.tracker-box').find('#' + trackerName);
		trackerView.toggleClass('tracker-hidden');
	},

	renderTrackers: function() {
		this.model.trackers().each(this.addTracker.bind(this));
	},

	renderTrackerForm: function(event) {
		event.preventDefault();
		var formView = new TaskTracker.Views.TrackerForm({
			collection: this.collection
		});
		this.addSubview('#tracker-form', formView);
	},

	renderTrackers: function() {
		this.model.trackers().each(this.addTracker.bind(this));
		// this.$(.'.tracker-box').sortable()
	},

	addTracker: function(tracker) {
		var trackerView = new TaskTracker.Views.TrackerShow({
			model: tracker
		});
		this.addSubview('.tracker-box', trackerView);
	},

	destroyTracker: function(tracker) {
		// destroy tracker permanently
	}
});