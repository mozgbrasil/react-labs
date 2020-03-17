// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

window.onload = function() {
  console.log("window.onload: background");
};

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var _AnalyticsCode = "UA-73869264-1",
  _gaq = _gaq || [];
_gaq.push(["_setAccount", _AnalyticsCode]),
  _gaq.push(["_trackEvent", "install", "" + new Date().getTime()]),
  // (function () {
  //   var e = document.createElement("script");
  //   (e.type = "text/javascript"),
  //     (e.async = !0),
  //     (e.src = "https://ssl.google-analytics.com/ga.js");
  //   var t = document.getElementsByTagName("script")[0];
  //   t.parentNode.insertBefore(e, t);
  // })(),
  chrome.runtime.onInstalled.addListener(function() {
    console.log("chrome.runtime.onInstalled.addListener");
    console.log("You have installed M3U Client!");
  }),
  chrome.browserAction.onClicked.addListener(function() {
    console.log("chrome.browserAction.onClicked.addListener");
    chrome.tabs.create({
      url: chrome.extension.getURL("index.html")
    });
  }),
  chrome.webRequest.onBeforeRequest.addListener(
    function(e) {
      console.log("chrome.webRequest.onBeforeRequest.addListener");
      if ("main_frame" == e.type) {
        var t = e.url.split("?")[0].split("#")[0];
        if (t.endsWith(".m3u") || t.endsWith(".m3u8"))
          return {
            redirectUrl: chrome.extension.getURL("index.html") + "#" + e.url
          };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );

//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//   chrome.pageAction.show(sender.tab.id);
//   sendResponse();
// });
