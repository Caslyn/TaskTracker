Backbone.LinkFormView = Backbone.View.extend({
	formShowing: false,

	events: {
		'click a': 'showForm',
		'click .close': 'hideForm',
		'click .create' : 'create',
		'keydown textarea' : 'triggerCreate'
	},

	render: function() {
		var renderedContent = this.formTemplate();
		this.$el.html(renderedContent);
		this.delegateEvents();
		return this;
	},



	hideForm: function() {
		this.$el.addClass('hidden')
		this.formShowing = false;
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