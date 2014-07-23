$(function() {
	var urls = [];
	$('ul.name li.title.ellipsis span.display-name a.ttip').each(function(i, el) {
		urls.push($(el).attr('href'));
	});
	console.log(urls);
});