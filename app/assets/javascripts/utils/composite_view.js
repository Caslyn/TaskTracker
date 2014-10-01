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
		// All elements that fall under parent
		var itemElements = $(this.$(this.orderOptions.modelElement).children());
		var idAttr = this.orderOptions.modelName + '-id';
		var collection = this.collection;
		// Iterate over & compare index w/ ord attribute
		itemElements.each(function (index, element) {
			// Account for Modal Included in ItemElements
			debugger;
			var itemId = $(element).data(idAttr);
			var item = collection.get(itemId);
			var ord = item.get('ord');
			if (ord === index) {
				return;
			// project_id attr indicates item is a Tracker
			} else if (item.get('project_id')) {
				var swapedEl = itemElements[ord];
				itemElements[ord] = element;
				itemElements[index] = swapedEl;
				return;
			} 
			else {
				item.save({ ord: index });
			}
		}.bind(this));
	}

})