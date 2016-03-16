
	new MediaElementPlayer('video', {success: function(media, node, player) {
},

startLanguauge: 'en',
			translationSelector: true,
			  features: ['playpause', 'progress', 'current','duration','tracks','captions', 'volume','fullscreen'],
			  alwaysShowControls: true

});

		$('.mejs-inner').mouseleave(function() {
			if ($('video')[0].player.media.paused == false) { 
				$(".mejs-playpause-button").fadeOut("slow");
				$(".mejs-time").fadeOut("slow");
				$(".mejs-volume-button").fadeOut("slow");
				$(".mejs-fullscreen-button").fadeOut("slow");
				$(".mejs-captions-button").fadeOut("slow");
				$('.mejs-time-rail').css('margin-top', '45px');
				};
		});
		
		$('.mejs-inner').mouseenter( function() {
			$(".mejs-playpause-button").fadeIn("slow");
			$(".mejs-time").fadeIn("slow");
			$(".mejs-volume-button").fadeIn("slow");
			$(".mejs-fullscreen-button").fadeIn("slow");
			$(".mejs-captions-button").fadeIn("slow");
		    $('.mejs-time-rail').css('margin-top', '0px');
		        		
				});