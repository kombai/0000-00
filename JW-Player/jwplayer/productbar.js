(function(jwplayer){
	
	var template = function(player, config, div) {

		var videoId = jQuery(player.container).attr("videoid");
		// don't know why, but need keep this function;
		this.resize = function() {onResize()};
		player.onReady(onReady);
		player.onPlay(onPlay);

		jQuery(window).resize(function() {
			onResize();
		});
		
		var annotations = {};
		var products = [];
		var timeTry = 28;
		var timer = 0;
		
		var showInfoBar = false;
		var scrolling = false;
		
		function onReady() {
			
			clearTimeout(timer);
			var connector = player.getPlugin("connector");
			annotations = connector.getAnnotations();
			if (timeTry || !annotations.available) {
				timer = setTimeout(arguments.callee, 256);
				-- timeTry;
				return;
			}
			
			if (timeTry < 0) {return;}
			
			jQuery(div).css({
				position: "absolute",
				zIndex: 444,
				bottom: 38,
				left: 0,
				width: "100%",
				display: "none"
			}).html(
				"<div class='bg-productbar'></div>" +
				"<div class='productbar'><div class='scroll'></div></div>"
			);
			
			var productbar = jQuery(div).find(".productbar .scroll").css({position: "relative", left: "0px"});
			
			var template = "<div class='product-item {color}'>" +
								"<div class='text'>{character}</div>" +
								"<div class='product-thumb'>" +
									"<img src='{image}' seek='{seek}' alt='' width=82 height=82 />" +
								"</div>" +
								"<div class='time'>{time}</div>" +
							"</div>";
			
			products = connector.getProductList();
			if (!products.length) {
				connector.loadProductList(function(jsonData) {
					products = jsonData;
					renderProduct(products);
				});
			} else {
				renderProduct(products);
			}
			
			function getTime(product_id) {
				for(var i in annotations) {
					var annotation = annotations[i];
					for (var j = 0; j < annotation.length; ++j) {
						if(annotation[j].product_id == product_id) return (i/29.96); 
					}
				}
				return null;
			}
			
			function renderProduct(list) {
				
				var character = ["A", "B", "C"], temp = [], colors=["org", "blue", "green"], time;
				for (var i = 0; i < list.length; ++i) {
					
					time = getTime(list[i].id);
					var minute = Math.floor(time / 60);
					var second = Math.round(time - minute * 60);
					(minute < 10) && (minute = "0" + minute);
					(second < 10) && (second = "0" + second);
					
					var displayTime =  minute + ":" + second;
					temp.push(
						template.replace("{time}", displayTime)
								.replace("{seek}", time)
								.replace("{character}", character[i%3])
								.replace("{image}", list[i].path)
								.replace("{color}", colors[i%3])
					);
				}
				
				productbar.html(temp.join("")).css({width: i*170});
				
				productbar.find(".product-thumb img").click(function() {
					if (scrolling) return;
					var seek = this.getAttribute("seek");
					jQuery(player.container).find("video").get(0).currentTime = seek;
				});
				
				var lastPos = 0;
				productbar.setDragable({
					lockY: true,
					start: function() {
						lastPos = jQuery(this).position();
					},
					move: function() {
						scrolling = true;
					},
					end: function() {
						var contaierWidth = jQuery(player.container).width();
						var scrollWidth = jQuery(this).width();
						
						var position = jQuery(this).position();
						var delta = scrolling ? (position.left - lastPos.left) : 0;
						if (position.left > 1 || 1*position.left + 1*delta > 0) {
							jQuery(this).stop().animate({left: 0});
						} else if (1*position.left + 1*delta + 1*scrollWidth < contaierWidth) {
							jQuery(this).stop().animate({left: contaierWidth - scrollWidth});
						} else {
							delta && jQuery(this).stop().animate({left: position.left + delta});
						}
						
						setTimeout(function() {
							scrolling = false;
						}, 128);
					}
				});
			}

		}
		
		this.show = function(callback) {
			jQuery(div).show();
			showInfoBar = true;
			callback && callback.call(player);
		}
		
		this.hide = function(callback) {
			jQuery(div).hide();
			showInfoBar = false;
			callback && callback.call(player);
		}
		
		this.toggle = function(callback) {
			jQuery(div).toggle();
			showInfoBar = !showInfoBar;
			callback && callback.call(player);
		}
		
		this.getState = function() {
			return showInfoBar;
		}
		
		function onPlay() {}
		
		function onResize() {}
		
  };

  jwplayer().registerPlugin('productbar', template);

})(jwplayer);