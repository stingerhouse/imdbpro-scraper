$(function() {
	console.log('jquery loaded');

	$('#scrape').click(function() {
		console.log('scrape button clicked');

		chrome.windows.create({'type': 'popup', width: 1042, height: 768, focused: true, url: 'chrome://newtab'}, function (window) {
		});
	});
});