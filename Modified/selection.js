chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")//this method is in app.js
        sendResponse({data: window.getSelection().toString()});
    else
        sendResponse({}); // snub them.
});
