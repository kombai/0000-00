(function(jwplayer){
	
	
	var template = function(player, config, div) {
	
		var start = jQuery(player.container).attr("starttime");
		var end = jQuery(player.container).attr("endtime");
		
		// don't know why, but need keep this function;
		this.resize = function() {};
		player.onResize(onResize);
		player.onReady(onReady);
		player.onMeta(onMeta);
		player.onMute(onMute);
		player.onTime(onTime);
		player.onPlay(onPlay);
		player.onPause(onPause);
		
		player.onBufferChange(onBuffer);
		
		var videoWidth = jQuery(player.container).width();
		// lock control bar button when tagging;
		var lockToolbar = false;
		
		function onResize() {
			 videoWidth = jQuery(player.container).width();
		}
		
		jQuery(window).resize(function() {
			onResize();
		});
		
		this.lockControlBar = function() {
			 lockToolbar = true;
		};
		
		this.unlockControlBar = function() {
			lockToolbar = false;
		};
		
		
		function onReady() {
			
			jQuery(div).css({
				position: "absolute",
				display: "block",
				zIndex: 999,
				height: 0,
				bottom: 45,
				width: "100%"
			}).html(
				"<div class='kontrolbar'>" +
					"<div class='time-slider'>" +
						"<div class='time-slider-rail'></div>" +
						"<div class='time-slider-buffer'></div>" +
						"<div class='time-slider-progress'></div>" +
						"<div class='time-slider-thumb'></div>" +
					"</div>" +
					"<div class='group-button'>" +
						"<div class='background'></div>" +
						"<div class='component'>" +
							"<div class='left'>" +
								"<div class='play-button'></div>" +
								"<div class='pause-button'></div>" +
								"<div class='elapsed'>00:00</div>" +
								"<div class='duration'>/00:00</div>" +
							"</div>" +
							"<div class='right'>" +
								"<div class='info'></div>" + 
								"<div class='fullscreen-button'></div>" + 
								"<div class='volume'></div>" + 
								"<div class='resolution'>240p</div>" + 
							"</div>" +
							"<div class='center'>" +
								"<div class='additional-left'></div>" +
								"<div class='tag-label'></div>" +
								"<div class='additional-right'></div>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>"
			);
			
			onMute({mute: player.getMute()});
			
			// setup control button;
			jQuery(div).find(".fullscreen-button").click(function() {
				if (lockToolbar) return;
				player.setFullscreen();
			});
			
			jQuery(div).find(".pause-button").click(function() {
				if (lockToolbar) return;
				player.pause();
			});
			
			jQuery(div).find(".play-button").click(function() {
				if (lockToolbar) return;
				player.play();
			});
			
			//var showInfoBar = player.getPlugin("productbar").getState();
			
			jQuery(div).find(".group-button .info").click(function() {
				//player.getPlugin("productbar").toggle();
				//showInfoBar = player.getPlugin("productbar").getState();
				//player.getPlugin("navigation").updateHeight(showInfoBar);
				//player.getPlugin("productlist").updateHeight(showInfoBar);
			});
			
			jQuery(div).find(".volume").click(function() {
				if (lockToolbar) return;
				player.setMute();
			});
			
			jQuery(div).find(".tag-label").click(function() {
				if (!player.getDuration()) return;
				
				if (jQuery(this).hasClass("tag-active")) {
					lockToolbar = false;
					// hide tagging;
					jQuery(this).removeClass("tag-active");
					player.getPlugin("annotation").show();
					player.getPlugin("tagging").hide();
					player.getPlugin("navigation").show();
					//player.getPlugin("productlist").show();
				} else {
					lockToolbar = true;
					// show tagging;
					jQuery(this).addClass("tag-active");
					player.getPlugin("annotation").hide();
					player.getPlugin("tagging").show();
					//player.getPlugin("productbar").hide();
					player.getPlugin("navigation").hide();
					//player.getPlugin("productlist").hide();
				}
				
				//var showInfoBar = player.getPlugin("productbar").getState();
				//player.getPlugin("navigation").updateHeight(showInfoBar);
				//player.getPlugin("productlist").updateHeight(showInfoBar);
			});
			
			
			jQuery(div).find(".time-slider-thumb").setDragable({
				lockY: true,
				start: function() {
					jQuery(this).addClass("dragging");
				},
				end: function() {
					var position = jQuery(this).position();
					var duration = player.getDuration();
					jQuery(this).removeClass("dragging");
					if (!duration) {
						jQuery(this).css({left: 0});
						return;
					} else {
						var currentTime = duration * position.left / videoWidth;
						jQuery(player.container).find("video").get(0).currentTime = currentTime;
					}
				}
			});
				
		}
		
		function onMeta() {
			var video = jQuery(player.container).find("video").get(0);
			// set time start;
			start && (video.currentTime = start);
			
			var duration = player.getDuration();
			var minute = Math.floor(duration / 60);
			var second = Math.round(duration - minute * 60);
			(minute < 10) && (minute = "0" + minute);
			(second < 10) && (second = "0" + second);
			jQuery(div).find(".component .duration").html("/" + minute + ":" + second);
			
		}
			
		function onMute(evt) {
			if (evt.mute == true) {
				jQuery(div).find(".volume").addClass("mute");
			} else {
				jQuery(div).find(".volume").removeClass("mute");
			}
		}
		
		function onTime(evt) {
			var video = jQuery(player.container).find("video").get(0);
			var duration = video.duration;
			var elapsed = video.currentTime;
			// catch end time;
			if (end && elapsed >= end || elapsed >= duration) {
				jQuery(div).find(".pause-button").hide();
				jQuery(div).find(".play-button").show();
				player.pause();
				!start && (start = 0);
				elapsed = start;
				video.currentTime = start;
			}
			
			var minute = Math.floor(elapsed / 60);
			var second = Math.round(elapsed - minute * 60);
			(minute < 10) && (minute = "0" + minute);
			(second < 10) && (second = "0" + second);
			jQuery(div).find(".component .elapsed").html(minute + ":" + second);
			
			var percent = 100*elapsed/duration;
			jQuery(div).find(".time-slider-progress").width(percent + "%");
			
			var timeSlider = jQuery(div).find(".time-slider-thumb");
			if (!timeSlider.hasClass("dragging")) {
				timeSlider.css({left: percent * videoWidth / 100});
			}
			
		}
		
		function onPlay(evt) {
			jQuery(div).find(".pause-button").hide();
			jQuery(div).find(".play-button").show();
			onResize();
		}
		
		function onPause(evt) {
			jQuery(div).find(".pause-button").show();
			jQuery(div).find(".play-button").hide();
		}
		
		function onBuffer(evt) {
			if (evt.bufferPercent < 101) {
				jQuery(div).find(".time-slider-buffer").width(evt.bufferPercent + "%");
			}
		}
		
  };

  jwplayer().registerPlugin('kontrolbar', template);

})(jwplayer);