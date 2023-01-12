chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "get_count_value") {
        var count = document.querySelector("h1").innerText;
        chrome.runtime.sendMessage({count: count});
    }
  });