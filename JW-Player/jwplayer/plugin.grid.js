
// queenMove plugin;
(function($) {
	
	function ignoreDagDrop(group) {
		$(group).each(function() {
			this.onmousedown = function(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
			}
		});
	}
	
	$.fn.queenMove = function(opt) {
		$(this).each(function() {
			var self = this;
			var def = {
				x: 0,
				y: 0,
				start: function() {},
				move: function() {},
				end: function() {}
			}
			$.extend(def, opt);
			var isTouch = false;

			function mouseDown(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				if (evt.touches && evt.touches.length) {
					isTouch = true;
					evt = evt.changedTouches[0];
				}
				if (self.isBusy) {return false;}
				
				def.start.call(self, evt);
				if (!(evt.button == 2 || evt.which == 3)) {
					
					def.x = evt.clientX;
					def.y = evt.clientY;
					
					if (isTouch) {
						self.ontouchmove = mouseMove;
						document.ontouchend = mouseUp;
					} else {
						self.onmousemove = mouseMove;
						document.onmouseup = mouseUp;
					}
				}
				return false;
			}
						
			function mouseMove(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				(isTouch == true) && (evt = event.changedTouches[0]);
				if (self.isBusy) {return false;}
				// update new position;
				if (self.updatePosition == true) {
					self.updatePosition = null;
					def.x = evt.clientX;
					def.y = evt.clientY;
					return false;
				}
				
				var deltaX = Math.round(def.x - evt.clientX);
				var deltaY = Math.round(def.y - evt.clientY);
				var tan = 1;
				if (deltaX != 0) {
					tan = Math.round(Math.abs(deltaY / deltaX));
				}
				var distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
				var direct = null;
				/* direct is 
					0 when move right;
					45 when move top-right;
					90 when move up;
					135 when move top-left;
					180 when move left;
					- 135 when move bottom-left;
					- 90 when move to down;
					- 45 when move to bottom-right;
				*/ 
				if (deltaX < 0 && tan <= 0.5) {
					direct = 0;
				} else if(deltaX < 0 && deltaY > 0 && tan > 0.5 && tan < 2) {
					direct = 45;
				} else if(deltaY > 0 && tan >= 2) {
					direct = 90;
				} else if(deltaX > 0 && deltaY > 0 && tan > 0.5 && tan < 2) {
					direct = 135;
				} else if(deltaX > 0 && tan <= 0.5) {
					direct = 180;
				} else if (deltaX > 0 && deltaY < 0 && tan > 0.5 && tan < 2) {
					direct = -135;
				} else if (deltaY < 0 && tan >= 2) {
					direct = -90;
				} else if (deltaX < 0 && deltaY < 0 && tan > 0.5 && tan < 2) {
					direct = -45;
				}
				
				def.direct = direct;
				def.distance = distance;
				def.move.call(self, evt, direct, distance);
				return false;
			}
			
			function mouseUp(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				(isTouch == true) && (evt = event.changedTouches[0]);
				if (self.isBusy) {return false;}
				self.onmousemove = null;
				self.ontouchmove = null;
				document.onmouseup = null;
				document.ontouchend = null;
				def.end.call(self, evt, def.direct, def.distance);
				def.distance = null;
				return false;
			}
			
			self.onmousedown = mouseDown;
			self.ontouchstart = mouseDown;
			
			var aForm = self.getElementsByTagName("form");
			if (aForm) {
				ignoreDagDrop(aForm);
			} else {
				var aInput = self.getElementsByTagName("input");
				ignoreDagDrop(aInput);
				var aIframe = self.getElementsByTagName("iframe");
				ignoreDagDrop(aIframe);
				var aTextarea = self.getElementsByTagName("textarea");
				ignoreDagDrop(aTextarea);
			}
			
			return this;
		});
	}
	
})(jQuery);


// simple draggable plugin;

(function($) {
	
	function ignoreDagDrop(group) {
		$(group).each(function() {
			this.onmousedown = function(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
			}
		});
	}
		
	$.fn.setDragable =  function(opt) {
		$(this).each(function() {
			var self = this;
			var def = {
				x: 0,
				y: 0,
				proxy: null,
				lockX: false,
				lockY: false,
				start: function() {},
				move: function() {},
				end: function() {}
			};
			
			$.extend(def, opt);
			
			var isTouch = false;
			var proxy = def.proxy || self;
			
			function mouseDown(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				if (evt.touches && evt.touches.length) {
					isTouch = true;
					evt = evt.changedTouches[0];
				}
				def.start.call(proxy, evt);
				if (!(evt.button == 2 || evt.which == 3)) {
					var position = $(proxy).css("position"),
						left = $(proxy).css("left"),
						top = $(proxy).css("top");
					
					$(proxy).css({position: (position != "absolute") ? "relative" : "absolute"});
					!def.lockX && $(proxy).css({left: parseFloat(left) ? left : "0px"}); 
					!def.lockY && $(proxy).css({top: parseFloat(top) ? top : "0px"}); 
					
					def.x = evt.clientX;
					def.y = evt.clientY;
					
					if (isTouch) {
						document.ontouchmove = mouseMove;
						document.ontouchend = mouseUp;
					} else {
						document.onmousemove = mouseMove;
						document.onmouseup = mouseUp;
					}
				}
				return false;
			};
			
					
			function mouseMove(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				(isTouch == true) && (evt = evt.changedTouches[0]);
				!def.lockX && $(proxy).css({left: parseFloat(proxy.style.left) + (evt.clientX - def.x) + "px"});
				!def.lockY && $(proxy).css({top: parseFloat(proxy.style.top) + (evt.clientY - def.y) + "px"});
				def.x = evt.clientX;
				def.y = evt.clientY;
				def.move.call(proxy, evt);
				return false;
			};
			
			function mouseUp(event) {
				var evt = event || window.event;
				evt.cancelBubble = true;
				(isTouch == true) && (evt = evt.changedTouches[0]);
				document.onmousemove = null;
				document.ontouchmove = null;
				document.onmouseup = null;
				document.ontouchend = null;
				
				def.end.call(proxy, evt);
				return false;
			};
			
			self.onmousedown = mouseDown;
			self.ontouchstart = mouseDown;
			
			var aForm = self.getElementsByTagName("form");
			if (aForm) {
				ignoreDagDrop(aForm);
			} else {
				var aInput = self.getElementsByTagName("input");
				ignoreDagDrop(aInput);
				var aIframe = self.getElementsByTagName("iframe");
				ignoreDagDrop(aIframe);
				var aTextarea = self.getElementsByTagName("textarea");
				ignoreDagDrop(aTextarea);
			}
		});
		return this;
	}
})(jQuery);

