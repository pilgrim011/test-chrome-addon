chrome.tabs.query({url:"*://*/*bmm2gvg"}, function(tabs) {
  if(tabs.length > 0) {
    let tabId = tabs[0].id;
    let port = chrome.tabs.connect(tabId);
    port.onMessage.addListener(function(response) {
      if(response !== undefined) {
        document.getElementById("count-value").innerText = response.count;
      }
    });
  }
});