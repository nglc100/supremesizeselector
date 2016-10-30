$(function() {
	chrome.extension.sendMessage({
		method: 'get'
	}, function(res) {

			setInterval(function(){
				if(!$('.in-cart').is(":visible")) {
					$("#size option").each(function(i) {
						if($(this).text() == res.size) {
							$('#size').prop('selectedIndex', i);
						}
					});	
				}
			}, 100);
	  
	});
});