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
		var title = this.$('#title-input').val();
		var description = this.$('#description-input').val();
		var params = {
			title: title,
			description: description
		}

		function success() {
			Backbone.history.navigate("", { trigger: true });
		};

		this.model.set(params);
		this.collection.create(this.model, { success: success });
 
	},

});