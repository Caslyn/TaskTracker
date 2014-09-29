Backbone.OrdView = Backbone.View.extend({
	saveOrds: function() {
		var itemElements = this.$(this.orderOptions.modelElement);
		var idAttr = this.orderOptions.modelName + '-id';
		var collection = this.collection;

		itemElements.each(function(index, element) {
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
});