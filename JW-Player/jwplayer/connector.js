(function(jwplayer){
	
	function getTextContent(node) {
		if (!node) {return "";}
		if (node.text) {return node.text;}
		else if (node.textContent) {return node.textContent;}
		else {return "";}
	}
	
	// product management;
	var template = function(player, config, div) {
	
		var videoId = jQuery(player.container).attr("videoid");
		
		// don't know why, but need keep this function;
		this.resize = function() {};
		
		// annotations;
		var annotations = {};
		// product ;
		var productlist = [];
		
		this.loadAnnotations = function(callback) {
			// load annotation data;
			var frame = 0;
			jQuery.getJSON("jwplayer/x.json", function(data) {
				for (var o = 0; o < data.length; ++o) {
					frame = data[o].frame;
					if (!annotations[frame]) {
						annotations[frame] = [];
					}
					annotations[frame].push({
						object: data[o]["object"],
						top: data[o]["y1"],
						left: data[o]["x1"],
						width: data[o]["x2"] - data[o]["x1"],
						height: data[o]["y2"] - data[o]["y1"]
					});
					annotations.available = true;
				}
				
				callback && callback(annotations);
			});
		};
		
		this.getAnnotations = function() {
			return annotations;
		};
		
		this.loadProductList = function(callback) {
		};
		
		
		this.getProductList = function() {
			return productlist;
		};
		
  };

  jwplayer().registerPlugin('connector', template);

})(jwplayer);