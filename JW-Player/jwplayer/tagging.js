(function(jwplayer){
	
	var template = function(player, config, div) {
	
		var videoId = jQuery(player.container).attr("videoid");
		var stime = config.startTime ? parseFloat(config.startTime) : 0;
		stime = stime < 0 ? 0 : stime;
		
		var videoSize = jQuery(player.container).data("size").split("-");
		
		// don't know why, but need keep this function;
		this.resize = function() {};
		
		player.onResize(onResize);
		player.onReady(onReady);
		player.onPlay(onPlay);
		
		function onReady() {
			

			jQuery("#" + player.id + "_jwplayer_display").css({zIndex: 98});
			jQuery("#" + player.id + "_jwplayer_logo").hide();
			
			jQuery(div).css({
				position: "absolute",
				top: 0,
				left: 0,
				height: 1,
				width: "100%",
				zIndex: 9999,
				"text-align": "left"
				//background: "#38aacf"
			}).html(
				"<div class='canvas'>" +
					"<div class='mask'></div>" +
					"<div class='rect'>" +
						"<div class='crop'></div>" +
						"<div class='edit'></div>" +
						"<div class='correct'>"+ 
							"<form name='correct-product' class='correct-product' method='POST' enctype='multipart/form-data' " +
									" action='/FuiszMediaStudio/AddProductServlet' " +
							">" +
								"<div class='header'>" +
									"<div style='float:left;'>Detail</div>" +
									"<div class='remove' style='float:right;width:72px;height:22px;'>Remove</div>" +
									"<div style='clear:both;'></div>" +
								"</div>" +
								"<input type='hidden' value='new' name='tagtype' />" +
								"<input type='hidden' name='videoid' class='video-id' />" +
								"<input type='hidden' name='productid' class='product-id' />" +
								"<input type='hidden' name='time' class='time-tag' />" +
								"<input type='hidden' name='annotationy' class='top-tag' />" +
								"<input type='hidden' name='annotationx' class='left-tag' />" +
								"<input type='hidden' name='annotationwidth' class='width-tag' />" +
								"<input type='hidden' name='annotationheight' class='height-tag' />" +
								"<input type='text' fix-value='Product Name' value='Product Name' name='productname' />" +
								"<input type='text' fix-value='Product Description' value='Product Description' name='productdesc' />" +
								"<input type='text' fix-value='Product URL' value='Product URL' name='producturl' />" +
								"<div style='padding: 6px;' >" +
									"<a href='javascript:void(0);' class='correct-button' > Select product </a>" +
									"<a href='javascript:void(0);' class='submit-button' > Submit </a>" +
								"</div>" +
							"</form>" +
						"</div>" + 
						"<form name='list-product-exists' ><div class='list-product'></div></form>" +
					"</div>" +
				"</div>"
			);
			
			var canvas = jQuery(div).find(".canvas");						
			
			canvas.css({
				width: "100%",
				display: "none"
			}).find(".mask")
			.css({
				background: "black",
				opacity: 0.1,
				width: "100%",
				height: "100%"
			});
			
			canvas.find(".crop")
			.css({
				background: "#bebebe",
				height: "100%",
				width: "100%",
				opacity: 0.3,
				position: 'absolute'
			});
			
			var rect = canvas.find(".rect")
			.css({
				position: "absolute",
				border: "3px solid #38aacf"
			});
			
			var correct = canvas.find(".correct")
			.css({
				position: "absolute",
				right: -342,
				top: -3,
				width: 327,
				display: "none",
				background: "#222222",
				padding: "5px",
				color: "white",
				border: "2px solid #38aacf"
			});
			
			correct.find(".remove").css({
				background: "url(jwplayer/images/remove.png) no-repeat right 3px",
				cursor: "pointer"
			}).click(function() {
				listProduct.hide();	
				correct.hide();
				correct.find("form").get(0).reset();
			});
			
			correct.find("input[type=text]").css({
				width: 308,
				height: 23,
				padding: 2,
				color: "#666666",
				margin: 6,
				border: "1px solid #3f3f3f",
				background: "#222222"
			}).focus(function(){
				var fixValue = jQuery(this).attr("fix-value");
				var value = jQuery(this).val();
				if(value == fixValue) {
					jQuery(this).val("");
				}
			}).blur(function(){
				var fixValue = jQuery(this).attr("fix-value");
				var value = jQuery(this).val();
				if(value == "") {
					jQuery(this).val(fixValue);
				}
			});
			
			
			var listProduct = canvas.find(".list-product").css({
				position: "absolute",
				top: -3,
				right: 0,
				width: 300,
				display: "none",
				color: "#666",
				background: "#222",
				"max-height": 400,
				border: "2px solid #38AACF"
			});
			
			correct.find(".correct-button").click(function(){
				var products = player.getPlugin("productlist").getProductList();
				var temp = "<div class='item-exists'>" +
								"<div class='name'>{name}</div>"+
								"<div class='des'>{des}</div>" +
								"<div class='url'>{url}</div>" +
								"<div class='product'>{product}</div>" +
								"<a class='select-button' href='javascript:void(0);' > Select </a>" +
							"</div>";
				var html = [];
				jQuery(products).each(function() {
					html.push(
						temp.replace("{name}", this.name)
							.replace("{des}", this.des)
							.replace("{url}", this.url)
							.replace("{product}", this.id)
					);
				});	
				listProduct.show().html(html.join(""));
				
				listProduct.find(".select-button").click(function() {
					var parent = jQuery(this.parentNode);
					var name = parent.find(".name").get(0).innerHTML;
					var des = parent.find(".des").get(0).innerHTML;
					var url = parent.find(".url").get(0).innerHTML;
					var id = parent.find(".product").get(0).innerHTML;
					
					correct.find("input[name=productid]").val(id);
					correct.find("input[name=tagtype]").val('exist');
					correct.find("input[name=productname]").val(name);
					correct.find("input[name=productdesc]").val(des);
					correct.find("input[name=producturl]").val(url);
					
					listProduct.hide();
					
				});
			});
			
			correct.find("form .submit-button").click(function() {
				var time = parseFloat(correct.find("input[name=time]").val()) + stime;
				var dataString = "tagtype=" + correct.find("input[name=tagtype]").val()
								+ "&productname=" + correct.find("input[name=productname]").val()
								+ "&productid=" + correct.find("input[name=productid]").val()
								+ "&productdesc=" + correct.find("input[name=productdesc]").val()
								+ "&producturl=" + correct.find("input[name=producturl]").val()
								+ "&videoid=" + correct.find("input[name=videoid]").val()
								+ "&time=" + time
								+ "&annotationx=" + correct.find("input[name=annotationx]").val()
								+ "&annotationy=" + correct.find("input[name=annotationy]").val()
								+ "&annotationwidth=" + correct.find("input[name=annotationwidth]").val()
								+ "&annotationheight=" + correct.find("input[name=annotationheight]").val();
				
				player.getPlugin("productlist").addNewProduct(
						 correct.find("input[name=productname]").val(),
						 correct.find("input[name=productdesc]").val(),
						 correct.find("input[name=producturl]").val(),
						 correct.find("input[name=annotationx]").val(),
						 correct.find("input[name=annotationy]").val(),
						 correct.find("input[name=annotationwidth]").val(),
						 correct.find("input[name=annotationheight]").val()
				);
				
				jQuery.ajax({  
				  type: "POST",  
				  url: "/FuiszMediaStudio/AddProductServlet",  
				  data: dataString,  
				  success: function() {  
					  //alert('done');
				  },
				  error : function () {
					  //alert('fail');
				  }
				});
				
				listProduct.hide();
				correct.hide();
				edit.hide();
				
				correct.find("form").get(0).reset();
				correct.find("input[name=productid]").val("");
				
				rect.css({
					height: 0,
					width: 0,
					top: 0,
					left: 0
				});
				
				return false;  
			});

			
			var edit = canvas.find(".edit")
			.css({
				position: "absolute",
				display: "none",
				cursor: "pointer",
				top: 0,
				right: 0,
				width: 32,
				height: 32,
				background: "#38aacf url('jwplayer/images/white-edit.png') no-repeat center center"
			}).mousedown(function(event) {
				event = window.event || event;
				event.cancelBubble = true;

				var video = jQuery(player.container).find("video").get(0);
				var currentTime = video.currentTime.toFixed(1);
				var videoPos = jQuery(video).position();
				var rectPos = rect.position();
				
				var clientWidth = video.clientWidth;
				var clientHeight = video.clientHeight;
				
				var videoWidth = video.videoWidth || videoSize[0];
				var videoHeight = video.videoHeight || videoSize[1];
				
				var scaleX = clientWidth / videoWidth;
				var scaleY = clientHeight / videoHeight;
				
				var deltaX = rectPos.left - videoPos.left;
				var deltaY = rectPos.top - videoPos.top;
				
				correct.find(".video-id").val(videoId);
				correct.find(".time-tag").val(currentTime);
				correct.find(".top-tag").val((deltaY/scaleY).toFixed(0));
				correct.find(".left-tag").val((deltaX/scaleX).toFixed(0));
				correct.find(".width-tag").val((rect.width()/scaleX).toFixed(0));
				correct.find(".height-tag").val((rect.height()/scaleY).toFixed(0));
				
				correct.show();
				

				var y = correct.find(".top-tag").val();
				var x = correct.find(".left-tag").val();
				var width = correct.find(".width-tag").val();
				var height = correct.find(".height-tag").val();
				
				var ctx = jQuery("#y").length ? jQuery("#y") : jQuery("<canvas id='y'></canvas>").appendTo(correct);
				ctx
				.attr({
					width: width,
					height: height
				})
				.hide();
				
				var context = ctx.get(0).getContext('2d');
				context.drawImage(video, x, y , width, height, 0, 0, width, height);
			});
			
			canvas.queenMove({
				start: function(event) {
					var rootPos = jQuery(player.container).offset();
					listProduct.hide();
					correct.hide();
					edit.hide();
					rect.css({
						height: 0,
						width: 0,
						top: event.pageY - rootPos.top,
						left: event.pageX - rootPos.left
					}).data("lastpos", {
						X: event.pageX,
						Y: event.pageY,
						rootY: rootPos.top,
						rootX: rootPos.left
					});
					
				},
				move: function(event, direct, distance) {
					var lastpos = rect.data("lastpos");
					var X = event.pageX;
					var Y = event.pageY;
					rect.css({
						width: Math.abs(X - lastpos.X),
						height: Math.abs(Y - lastpos.Y)
					});
					
					if (lastpos.X > X && lastpos.Y < Y) {
						// IV;
						rect.css({
							left: X - lastpos.rootX,
							top: lastpos.Y - lastpos.rootY
						});
					} else if (lastpos.X >= X && lastpos.Y >= Y) {
						// III
						rect.css({
							left: X - lastpos.rootX,
							top: Y - lastpos.rootY
						});
					} else if (lastpos.X < X && lastpos.Y > Y) {
						// II
						rect.css({
							left: lastpos.X - lastpos.rootX,
							top: Y - lastpos.rootY
						});
					}
					
				},
				end: function(event, direct, distance) {
					// reset rect;
					if (!distance) return;
 					edit.fadeIn();
				}
			});
			
			player.container.appendChild(div);
		}
		
		this.show = function(callback) {
			(player.getState() == "PLAYING") && player.pause();
			jQuery(div).find(".canvas").show();
			jQuery("#" + player.id + "_jwplayer_display").hide();
			callback && callback.call(player);
		};
		
		this.hide = function(callback) {
			(player.getState() != "PLAYING") && player.play();
			jQuery(div).find(".canvas").hide();
			jQuery(div).find(".canvas .rect").css({height: 0, width: 0, top: 0, left: 0});
			jQuery(div).find(".canvas .edit").hide();
			jQuery(div).find(".canvas .correct").hide();
			jQuery(div).find(".canvas .list-product").hide();
			callback && callback.call(player);
		};
		
		function onResize() {
			jQuery("#" + player.id + "_jwplayer_display").css({zIndex: 98});
			// 36 is height of controlbar;
			jQuery(div).find(".canvas").height(player.container.offsetHeight - 36);
		}
		
		jQuery(window).resize(function() {
			onResize();
		});
		
		function onPlay(evt) {
			jQuery(div).show();
			onResize();
		}
		
  };

  jwplayer().registerPlugin('tagging', template);

})(jwplayer);