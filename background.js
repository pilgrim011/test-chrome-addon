function handleMessage(request, sender, sendResponse) {
  if (request.count) {
    var url = "data:text/html,<h1>" + request.count + "</h1>";
    chrome.windows.create({url: url, type: "popup"});
  }
}

chrome.runtime.onMessageExternal.addListener(handleMessage);