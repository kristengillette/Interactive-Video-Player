$(document).ready(function() {

	var times = [0, 4.13, 7.535, 11.27, 13.96, 17.94, 22.37, 26.88, 30.92, 34.73, 39.43, 42.35, 46.3, 49.27, 53.76, 57.78, 60.15];
	var time;

$('video')[0].player.media.addEventListener('timeupdate', function() {
	 time = $('video')[0].player.media.currentTime;

	 for (var i = 0; i < times.length; i++) {
	 	if (time >= times[i] && time <= times[i+1]) {
	 		$('#' + i).css('color', 'orange'); 
	 	} else {
	 		$('#' + i).css('color', '#384047');
	 	}
	 };
}); 

$('span').click(function() {
	var spanTime = $(this).attr('id');
	$('video')[0].player.media.currentTime = times[spanTime] + 0.01;
});
	
});
