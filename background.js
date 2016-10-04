chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
	if(request.method == 'get') {
		sendResponse({
			size: localStorage.size,
		});
	}
	return true;
});