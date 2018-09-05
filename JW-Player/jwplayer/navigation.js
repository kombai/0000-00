
(function(jwplayer){
	
	
	var template = function(player, config, div) {
	
		// don't know why, but need keep this function;
		this.resize = function() {};
		var showInfoBar = false;
		
		player.onReady(onReady);
		player.onPlay(onPlay);
		player.onResize(onResize);
		jQuery(window).resize(function() {
			onResize();
		});
		
		function onReady(evt) {
			jQuery(div).css({
				position: "absolute",
				top: 0,
				left: 0,
				height: 0,
				width: "100%",
				zIndex: 333,
				display: "none"
			}).html("<div class='navigation clearfix'>" + 
						"<div class='wishlist'>" +
							"<div class='wishlist-content'>" +
								"<div class='icon'>" + 
									"Wishlist" +
								"</div>" +	
								"<a href='javascript:void(0);' class='arrow'>" +
								"</a>" +
							"</div>" +
							"<div class='list productlist' ></div>" +
						"</div>" +
						
						"<div class='nav'>" +
							"<a href='#' class='logo'></a>" +
						"</di/v>" +
					"</div>");
			
			var showProductlist = false;
			var showWishlist = false;
			
			jQuery(div).find(".wishlist .icon").click(function(){
				onResize();
				jQuery(div).find(".wishlist .list").toggle();
				showWishlist = ! showWishlist;
				if (showWishlist == true) {
					player.getPlugin("productlist").hide();
					showProductlist = false;
				}
			}).trigger("click");
			
			jQuery(div).find(".wishlist .arrow").click(function(){
				onResize();
				player.getPlugin("productlist").toggle();
				showProductlist = !showProductlist;
				if (showProductlist == true) {
					jQuery(div).find(".wishlist .list").hide();
					showWishlist = false;
				}
			});
			
		};
		
		function onResize() {
			var detal = showInfoBar ? 200 : 80;
			jQuery(div).find(".wishlist .list").height(player.container.offsetHeight - detal);
		}
		
		this.show = function(callback) {
			jQuery(div).show();
			callback && callback();
		};
		
		this.hide = function(callback) {
			jQuery(div).hide();
			callback && callback();
		};
		
		var colors = ["org", "blue", "green"];
		var colorIndex = 0;
		
		this.addToWishList = function(name, id, des, url, path) {
			var wishlist = jQuery(div).find(".wishlist .list");
			var exists = wishlist.find("#wl-" + id); 
			jQuery(div).find(".icon").css({color: "#38aacf"});
			setTimeout(function() {jQuery(div).find(".icon").css({color: "white"});}, 108);
			 
			if (exists.length) {
				var select = exists.find(".select");
				select.html(1*select.html()+1);
			} else {
				var template = "<div class='item' id='wl-{id}' >" +
								"<div class='clearfix'>" +
									"<div class='color {tag-color}'></div>" +
									"<div class='product-content'>" +
										"<div class='name-item'>{name-item}</div>" +
										"<div class='time'></div>" +
									"</div>" +
									"<a href='http://www.cbs.com/shows/person_of_interest/' target='_blank' class='thumb'><img src='{image}' /></a>" +
								"</div>" +
								"<div class='description'></span>{description}</span></div>" +
								"<div class='product-url'></span>Product URL : {product-url}</span></div>" +
								"<div class='action clearfix'>" +
									"<div class='select'>1</div>" +
									"<div class='remove' item='wl-{id}' >Remove</div>" +
									"<div class='line'></div>" +
								"</div>" +
							"</div>";
				
				jQuery(
					template.replace(new RegExp("{id}", "gi"), id)
					.replace("{tag-color}", colors[colorIndex%3])
					.replace("{name-item}", name)
					.replace("{image}", path)
					.replace("{description}", des)
					.replace("{product-url}", url)
				).appendTo(wishlist).find(".remove").click(function(){
					var item = this.getAttribute("item");
					var wishItem = document.getElementById(item);
					wishItem.parentNode.removeChild(wishItem);
				});
				
				 ++ colorIndex; 
			}
		};
		
		// using when infor bar show hide;
		this.updateHeight = function(bool) {
			 showInfoBar = bool;
			 var detal = bool ? 190 : 75;
			 var wishlist = jQuery(div).find(".wishlist .list");
			 wishlist.height(player.container.offsetHeight - detal);
		};
		
		function onPlay() {
			jQuery(div).show();
		} 

  };

  jwplayer().registerPlugin('navigation', template);

})(jwplayer);