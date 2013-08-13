(function ( $ ) {
	$.fn.toggleAttr = function(attr, value) {
		if (!this.data('old-attr')) this.data('old-attr', this.attr(attr));
		if (!this.data('new-attr')) this.data('new-attr', value);
		if (!this.data('toggle-attr')) this.data('toggle-attr', attr);
		if (this.attr(attr) == value) this.attr(attr, this.data('old-attr'));
		else this.attr(attr, value);
		return this;
	};
}( jQuery ));
