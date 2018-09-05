(function(jwplayer){
	
	
	var template = function(player, config, div) {
	
		// don't know why, but need keep this function;
		this.resize = function() {};
		
		var annotationids = jQuery(player.container).attr("annotationids");
		annotationids && (annotationids = annotationids.split(","));
		!annotationids && (annotationids = []);
		
		var videoSize = jQuery(player.container).data("size").split("-");
		
		player.onReady(onReady);
		player.onTime(onTime);
		
		var annotations = {};
		var products = [];
		
		function onReady(evt) {
			
			var connector = player.getPlugin("connector");
			
			jQuery(div).css({
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 96,
				overflow: "hidden"
				//"pointer-events": "none"
			}).html(
				"<div class='annotation'>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
					"<div class='rect'></div>" +
				"</div>"
			);
			
			var annotation = jQuery(div).find(".annotation")
			.css({
				position: "absolute",
				top: 0,
				left: 0,
				width: 0,
				height: 0
			});
			
			annotation.find(".rect").each(function() {
				jQuery(this).css({
					position: "absolute",
					display: "none",
					top: 0,
					left: 0,
					width: 0,
					height: 0,
					opacity: 0.5,
					background: "orange",
					border: "2px solid blue"
				}).click(function(evt) {
					
				});
			});
			
			annotations = connector.getAnnotations();
			if (!annotations || (annotations && !annotations.available)) {
				connector.loadAnnotations(function(jsonData) {
					annotations = jsonData;
				});
			} 
			
		};
		
		this.show = function(callback) {
			jQuery(div).show();
			callback && callback();
		};
		
		this.hide = function(callback) {
			jQuery(div).hide();
			callback && callback();
		};
		
		function onTime(evt) {
			if (!annotations || (annotations && !annotations.available)) return;
			if (player.getRenderingMode() == 'flash') return;
			
			var frameIndex = Math.round(evt.position * 23.97);
			var frame = annotations[frameIndex];
			var scaleX =1, scaleY = 1;
			var video = jQuery(player.container).find("video").get(0);
			var pos = jQuery(video).position();
			if (pos) {
				jQuery(div).find(".annotation")
				.css({
					top: pos.top,
					left: pos.left
				});
			}
			var clientHeight = video.clientHeight;
			var clientWidth = video.clientWidth;
			
			var videoWidth = video.videoWidth || videoSize[0];
			var videoHeight = video.videoHeight || videoSize[1];
			
			scaleX = clientWidth / videoWidth;
			scaleY = clientHeight / videoHeight;
		
			var rects = jQuery(div).find(".rect"), i = 0;
			
			if (frame && frame.length) {
				for (i = 0 ; i < frame.length; ++ i) {
					var rect = rects.get(i);
					jQuery(rect).css({
						display: "block",
						height: frame[i]["height"] * scaleY,
						width: frame[i]["width"] * scaleX,
						left: frame[i]["left"] * scaleY + "px",
						top: frame[i]["top"] * scaleX + "px"
					}).attr({
						"object-id" : frame[i]["object"]
					}).click(function(evt) {
						player.getPlugin("navigation").addToWishList("Poi", jQuery(this).attr("object-id"), "The description", jQuery(this).attr("object-id"), "poi.jpg");
					});
				}
			
			}
			
			for (var j = i; j < rects.length; ++j) {
				rects.get(j).style.display = "none";
			}
			
		}
		
  };

  jwplayer().registerPlugin('annotation', template);

})(jwplayer);