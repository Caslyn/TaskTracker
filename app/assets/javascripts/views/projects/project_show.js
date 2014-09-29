TaskTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST["projects/show"],

	events: {
		"click .tracker-btn": "toggleTracker",
		"click .add-story-sidebar": "delegateStoryForm",
	},

	initialize: function() {
		this.collection = this.model.trackers();
		this.projectId = "project#" + this.model.id;
		this.listenTo(this.model, 'sync', this.render);
		this.collection.each(this.addTracker.bind(this));
		this.listenTo(this.collection, 'add', this.addTracker);
		this.listenTo(this.collection, 'remove', this.removeTracker);
	},

	render: function() {
		var renderedContent = this.template({ project: this.model }); 
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	},

	toggleTracker: function(event) {
		event.preventDefault();
		var $currentTarget = $(event.currentTarget);
		var trackerName = $currentTarget.attr('id');
		var trackerView = $('.tracker-box').find('#' + trackerName);

		trackerModel = _.find(this.collection.models, function(tmodel) {
			return tmodel.attributes.id === trackerView.data('tracker-id')
		});

		trackerModel.set({ visible: !(trackerModel.attributes.visible) });
		trackerModel.save();
	},

	addTracker: function(tracker) {
		var trackerView = new TaskTracker.Views.TrackerShow({
			model: tracker
		});
		this.addSubview('.tracker-box', trackerView);
	},

	delegateStoryForm: function(event) {
		var iceboxView = _.find(this.subviews()[".tracker-box"], function(subview) {
			return subview.model.attributes.title === "icebox"
		});
		iceboxView.renderStoryForm(event);

	}
});