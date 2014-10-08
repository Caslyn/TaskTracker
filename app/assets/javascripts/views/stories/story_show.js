TaskTracker.Views.StoryShow = Backbone.CompositeView.extend({
	template: JST['stories/show'],

	attributes: function(){
		return {
			'data-tracker-id': this.model.get('tracker_id'),
			'data-story-id': this.model.id
		};
	},

	events: {
		"click .edit-story": "toggleEdit",
		"click .show-modal": "showModal",
		"click .state": "changeState",
	},

	toggleEdit: function(event) {
		event.preventDefault();
		var storyView = new TaskTracker.Views.StoryForm({ 
			model: this.model 
		});
		this.$el.append(storyView.render().$el);
		this.$('.story-title').hide();
		this.$(storyView.$el).on('remove', this.render.bind(this));
	},

	render: function() {
		var renderedContent = this.template({ story: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	changeState: function(event) {
		event.preventDefault();
		var $currentTarget = $(event.currentTarget);
		// save state to reject/accept based on user selection
		if ($currentTarget.hasClass("rejected")) {
			this.saveState("restart");
			$currentTarget.remove();
			return;
		} else if ($currentTarget.hasClass("accepted")) {
			this.saveState("completed");
			return;
		}

		// access the next logical state for task
		var currentState = this.model.get('state');
		var nextState = this.findNextState(currentState);
		// configure buttons if the next state can be either accept or reject
		if (nextState.length > 1) {
			var secondButton = event.currentTarget.cloneNode();
			$(secondButton).html("rejected").addClass("rejected");
			$currentTarget.parent().append(secondButton);
			$currentTarget.html("accepted").addClass("accepted");
		} else {
			$currentTarget.text(nextState[0]);
			this.saveState(nextState[0]);
		}
	},

	saveState: function(newState) {
		this.model.set("state", newState);
		this.model.save();
	},

	findNextState: function(state) {
		if (state === "start" || state === "restart") {
			return ["finish"];
		} else if (state === "finish") {
			return ["deliver"];
		} else if (state === "deliver") {
			return ["accept", "reject"];
		} else if (state === "reject") {
			return ["restart"]
		} else {
			return ["complete"]
		}
	},

	showModal: function (event) {
		event.preventDefault();
		this.$('.modal').modal();
	}
})