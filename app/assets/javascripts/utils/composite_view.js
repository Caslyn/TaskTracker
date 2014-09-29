Backbone.CompositeView = Backbone.View.extend({
	
	addSubview: function (selector, subview) {
		this.subviews(selector).push(subview);
		this.attachSubview(selector, subview.render());
	},

	attachSubview: function (selector, subview) {
		this.$(selector).append(subview.$el);
		subview.delegateEvents();

		if (subview.attachSubviews) {
			subview.attachSubviews();
		}
	},

	attachSubviews: function() {
		var view = this;
		_(this.subviews()).each(function (subviews, selector) {
			view.$(selector).empty();
			_(subviews).each(function (subview) {
				view.attachSubview(selector, subview);
				view.onRender && view.onRender();
			});
		});
	},

	subviews: function (selector) {
		this._subviews = this._subviews || {};

		if (!selector) {
			return this._subviews;
		} else {
			this._subviews[selector] = this._subviews[selector] || [];
			return this._subviews[selector];
		}
	},

	remove: function() {
		Backbone.View.prototype.remove.call(this);
		_(this.subviews()).each(function (subviews) {
			_(subviews).each(function (subview) {
				subview.remove();
			});
		});
	},

	removeSubview: function (selector, subview) {
		subview.remove();		
		var subviews = this.subviews(selector);
		subviews.splice(subviews.indexOf(subview), 1);
	},

	onRender: function() {
		var view = this;
		_(this.subviews()).each(function (subviews, selector) {
			_(subviews).each(function (subview) {
				subview.onRender && subview.onRender();
			});
		});
	},

	saveOrds: function(event) {
		// gather all elements and save their new ords to their index
		var itemElements = $(this.$(this.orderOptions.modelElement).children());
		var idAttr = this.orderOptions.modelName + '-id';
		var collection = this.collection;

		itemElements.each(function (index, element) {
			// find out which tracker the element went to
			var $itemElement = $(element);
			var itemId = $itemElement.data(idAttr);
			var item = collection.get(itemId);
			if (item.get('ord') === index) {
				return;
			} else {
				item.save({ ord: index });
			}
		}.bind(this));
	}

})