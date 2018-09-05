(function(jwplayer){
	
	
	var template = function(player, config, div) {

		var videoId = jQuery(player.container).attr("videoid");
		// don't know why, but need keep this function;
		this.resize = function() {onResize();};
		player.onReady(onReady);
		player.onPlay(onPlay);

		jQuery(window).resize(function() {
			onResize();
		});
		
		var products = [];
				
		function onReady() {
			
			var connector = player.getPlugin("connector");
			
			jQuery(div).css({
				position: "absolute",
				right: 0,
				top: 0,
				width: 0,
				height: "100%",
				zIndex: 111
			}).html(
				"<div class='productlist' ></div>"
			);
			
			var productlist = jQuery(div).find(".productlist")
			.css({
				position: "absolute",
				top: 40,
				right: 1,
				bottom: 40,
				width: 203,
				display: "none",
				"overflow-x": "hidden",
				"overflow-y": "auto"
			});
			
			products = connector.getProductList();
			if (!products.length) {
				connector.loadProductList(function(jsonData) {
					products = jsonData;
					renderProduct(products);
				});
			} else {
				renderProduct(products);
			}
			
			var template = "<div class='item' id='p-{id}' >" +
								"<div class='clearfix'>" +
									"<div class='color {tag-color}'></div>" +
									"<div class='product-content'>" +
										"<div class='name-item'>{name-item}</div>" +
										"<div class='time'>{time}</div>" +
									"</div>" +
									"<div class='thumb'><img src='{image}' /></div>" +
								"</div>" +
								"<div class='description'></span>{description}</span></div>" +
								"<div class='product-url'></span>Product URL : {product-url}</span></div>" +
								"<div class='action clearfix'>" +
									"<div class='edit' item='p-{id}' >Edit</div>" +
									"<div class='remove' item='p-{id}' >Remove</div>" +
									"<div class='line'></div>" +
								"</div>" +
							"</div>";
			
			function renderProduct(list) {
				
				var colors = ["org", "blue", "green"];
				var temp = [];
				for (var i = 0; i < list.length; ++i) {
					temp.push(
						template.replace(new RegExp("{id}", "gi"), list[i].id)
								.replace("{tag-color}", colors[i%3])
								.replace("{name-item}", list[i].name)
								.replace("{time}", new Date().getTime() )
								.replace("{image}", list[i].path)
								.replace("{description}", list[i].des)
								.replace("{product-url}", list[i].url)
					);
				}
				
				productlist.html(temp.join(""));
				
				productlist.find(".edit").click(function() {
					var id = jQuery(this).attr('item');
					var item = jQuery("#" + id);
					var imagePath = item.find("img").attr("src");
				});
				
				productlist.find(".remove").click(function() {
					var id = jQuery(this).attr('item');
					var item = jQuery("#" + id);
					productlist.get(0).removeChild(item.get(0));
				});
				
				
			}
			
		}
		
		function uuid() {
			return "F-" + new Date().getTime(); 
		};
		
		this.addNewProduct = function(name, des, url, x, y, width, height) {
			var mediaplay = jQuery(player.container).find("video").get(0);
			var id = uuid();
			var template = "<div class='item' id='p-{id}' >" +
								"<div class='clearfix'>" +
									"<div class='color org'></div>" +
									"<div class='product-content'>" +
										"<div class='name-item'>{name-item}</div>" +
									"</div>" +
									"<div class='thumb'><canvas width=43 height=43 ></canvas></div>" +
								"</div>" +
								"<div class='description'></span>{description}</span></div>" +
								"<div class='product-url'></span>Product URL : {product-url}</span></div>" +
								"<div class='action clearfix'>" +
									"<div class='edit' item='p-{id}' >Edit</div>" +
									"<div class='remove' item='p-{id}' >Remove</div>" +
									"<div class='line'></div>" +
								"</div>" +
							"</div>";
			var newProduct = jQuery(
				template.replace(new RegExp("{id}", "gi"), id)
					.replace("{name-item}", name)
					.replace("{description}", des)
					.replace("{product-url}", url)
			);
			var canvas = newProduct.find("canvas").css({border: "1px solid white"});
			var context = canvas.get(0).getContext("2d");
			context.drawImage(mediaplay, x, y, width, height, 0, 0, 43, 43);
			var anchor = jQuery(".productlist .item").get(0);
			if (anchor) {
				newProduct.insertBefore(anchor);
			} else {
				newProduct.appendTo(jQuery(".productlist").get(0));
			}
			
			this.addProduct({
				name: name,
				id: null,
				des: des,
				url: url,
				path: null
			});
		}
		
		this.getProductList = function() {
			return products;
		}
		
		this.addProduct = function(product) {
			products.unshift(product);
		}
		
		this.show = function(callback) {
			jQuery(div).show();
			callback && callback.call(player);
		}
		
		this.hide = function(callback) {
			jQuery(div).hide();
			callback && callback.call(player);
		}
		
		this.toggle = function(callback) {
			jQuery(div).toggle();
			callback && callback.call(player);
		}
		
		// using when infor bar show hide;
		this.updateHeight = function(bool) {
			 var bottom = bool ? 162 : 42;
			 jQuery(div).find(".productlist").css({bottom: bottom});
		}
		
		function onResize() {}
		
		function onPlay(evt) {
			jQuery(div).find(".productlist").show();
			jQuery("#" + player.id + "_jwplayer_display").hide();
		}
		
  };

  jwplayer().registerPlugin('productlist', template);

})(jwplayer);