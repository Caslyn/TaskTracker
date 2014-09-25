TaskTracker.Views.ProjectForm = Backbone.View.extend({
	template: JST['projects/form'],

	events: {
		"click button": "submit"
	},

	render: function() {
		var renderedContent = this.template({ project: this.model });
		this.$el.html(renderedContent);
		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var title = this.$('#project-title-input').val();
		var params = {
			title: title,
			// user_id: find user_id
		}

		function success() {
			Backbone.history.navigate("", { trigger: true });
		};

		this.model.set(params);
		if (this.model.isNew()) {
			this.collection.create(this.model, { success: success });
		} else { 
			throw "Not implemented yet";
			// this.collection.save({}, { success: success });
		}
	},

});