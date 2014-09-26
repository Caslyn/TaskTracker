Backbone.LinkFormView = Backbone.View.extend({
	formShowing: false,

	events: {
		'click a': 'showForm',
		'click .close': 'hideForm',
		'submit' : 'create',
		'keydown textarea' : 'triggerCreate'
	},

	render: function() {
		var renderedContent;
		if (this.formShowing) {
			renderedContent = "";
		}  else {
			renderedContent = this.formTemplate();
		}
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	},

	hideForm: function() {
		this.formShowing = true;
		this.render();
	},

	triggerCreate: function(event) {
		// when enter/return key is pressed
		if (event.keyCode === 13) {
			this.create(event);
		}
	},

	showForm: function(event) {
		event.preventDefault();
		this.formShowing = true;
		this.render();
	}
})