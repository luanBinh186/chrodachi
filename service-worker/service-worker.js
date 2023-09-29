"use strict";


var History = new Date()
chrome.action.setBadgeText({ 'text': '?' });
chrome.action.setBadgeBackgroundColor({ 'color': "#777" });


chrome.runtime.onStartup.addListener(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(function (error) {
        console.error('Service Worker registration failed:', error);
      });
  }
});

function FormatDuration(d) {
  if (d < 0) {
    return "?";
  }
  var divisor = d < 3600000 ? [60000, 1000] : [3600000, 60000];
  function pad(x) {
    return x < 10 ? "0" + x : x;
  }
  return Math.floor(d / divisor[0]) + ":" + pad(Math.floor((d % divisor[0]) / divisor[1]));
}

function UpdateBadges() {
  var now = new Date();
  var description = FormatDuration(now - History);
  chrome.action.setBadgeText({ 'text': description });
}
setInterval(UpdateBadges, 1000);


