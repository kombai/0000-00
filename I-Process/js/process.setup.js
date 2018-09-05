// create by Minh Nguyen;

(function() {
	

	window.process = function(src) {
		
		var onload = [];
		var self = this;
		self.ready = function(func) {
			onload.push(func);
			return self;
		};

		var img = document.createElement("img");
		img.src = src;
		img.onload = function() {
			// initiation;
			self.cover = document.createElement('canvas');
			self.cover.width = this.width;
			self.cover.height = this.height;
			self.cover.getContext('2d').drawImage(this, 0, 0);
			for (var i = 0; i < onload.length; ++ i) { 
				onload[i].call(self, this);
			}
		};
	};

	function rgbToHsv(r, g, b){
	    r = r/255, g = g/255, b = b/255;
	    var max = Math.max(r, g, b),
	    	min = Math.min(r, g, b);
	    var h, s, v = max;

	    var d = max - min;
	    s = max == 0 ? 0 : d / max;

	    if (max == min) {
	        h = 0;
	    } else {
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }

	    return [h, s, v];
	}

	process.prototype = {
		getContext: function() {
			return this.cover.getContext('2d');
		},
		getCanvas: function() {
			return this.cover;
		},
		getData: function() {
			var c = this.cover;
			var ctx = this.getContext();
			return ctx.getImageData(0, 0, c.width, c.height);
		},
		getBlankData: function() {
			var c = this.cover;
			var ctx = this.getContext();
			return ctx.createImageData(c.width, c.height);
		},
		getGrayData: function() {
			var imageData = this.getData(),
				height = imageData.height,
				width = imageData.width,
				data = imageData.data,
				i, x, y, r, g, b,
				orgData = this.getData()["data"];
				
			for (y = 0; y < height; ++y) {
				for (x = 0; x < width; ++x) {
					i = (y * 4) * width + (x * 4);
					r = data[i + 0];
					g = data[i + 1];
					b = data[i + 2];
					data[i + 0] = data[i + 1] = data[i + 2] = 0.33 * r + 0.55 * g + 0.11 * b;
				}
			}

			return imageData;
		},
		getOilPaintingData: function(rad) {
			var imageData = this.getData(),
				height = imageData.height,
				width = imageData.width,
				data = imageData.data,
				i, x, y, p, r = parseInt(rad) || 2,
				orgData = this.getData()["data"];
				
				
			for (y = 0; y < height; ++y) {
				for (x = 0; x < width; ++x) {
					i = (y * 4) * width + (x * 4);
					p = getOilData(x, y, r);
					data[i + 0] = p.r;
					data[i + 1] = p.g;
					data[i + 2] = p.b;
				}
			}


			function getOilData(x, y, radius) {

				var dx, dy, di, avg;

				var min = {
					x: Math.max(0, x - radius),
					y: Math.max(0, y - radius)
				};
				var max = {
					x: Math.min(width, x + radius),
					y: Math.min(height, y + radius)
				};

				var group = {}, ii = 0, maxLen = 0;
				
				for (dy = min.y; dy < max.y; ++ dy) {
					
					for (dx = min.x; dx < max.x; ++ dx) {
						
						di = (dy * 4) * width + (dx * 4);
						
						avg = (orgData[di + 0] + orgData[di + 1] + orgData[di + 2]) / 3;

						avg = (avg * 22/255) << 0; 
						
						!group[avg] && (group[avg] = {length: 0, r: 0, g: 0, b: 0});
						
						group[avg]["length"] += 1;
						group[avg]["r"] += orgData[di];
						group[avg]["g"] += orgData[di + 1];
						group[avg]["b"] += orgData[di + 2];

						if (group[avg]["length"] > maxLen) {
							ii = avg;
							maxLen = group[avg]["length"];
						}
					}
				}

				return {
					r: group[ii]["r"] / maxLen,
					g: group[ii]["g"] / maxLen,
					b: group[ii]["b"] / maxLen
				};
			}
					
			return imageData;
		},
		getLayerData: function(num) {
			var imageData = this.getData(),
				height = imageData.height,
				width = imageData.width,
				data = imageData.data,
				i, x, y, r, g, b, key, color, newData,
				num = parseInt(num) || 22;

			var layerData = [];
			for (y = 0; y < height; ++y) {
				for (x = 0; x < width; ++x) {
					i = (y * 4) * width + (x * 4);
					
					r = (data[i + 0] * num / 255) << 0;
					g = (data[i + 1] * num / 255) << 0;
					b = (data[i + 2] * num / 255) << 0;
					key = (r + "-" + g + "-" + b); 
					if (!layerData[key]) {
						layerData[key] = this.getBlankData();
					}
					newData = layerData[key]["data"];
					
					newData[i + 0] = data[i + 0];
					newData[i + 1] = data[i + 1];
					newData[i + 2] = data[i + 2];
					newData[i + 3] = data[i + 3];
				}
			}
			return layerData;
		},
		setData: function(imageData, top, left) {
			var ctx = this.getContext();
			if (arguments.length == 1) {
				ctx.putImageData(imageData, 0, 0);
			} else if (arguments.length == 3) {
				ctx.putImageData(imageData, top, left);
			}
			return this.cover;
		},
		cloneData: function(imageData, top, left) {
			var newCanvas = document.createElement('canvas');
			newCanvas.width = this.cover.width;
			newCanvas.height = this.cover.height;
			var ctx = newCanvas.getContext('2d');
			if (arguments.length == 1) {
				ctx.putImageData(imageData, 0, 0);
			} else if (arguments.length == 3) {
				ctx.putImageData(imageData, top, left);
			}
			return newCanvas;
		}
	};

})();