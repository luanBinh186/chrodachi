
// var History: any = new Date()
// chrome.action.setBadgeText({ 'text': '?' });
// chrome.action.setBadgeBackgroundColor({ 'color': "#f6d7b1" });

// chrome.runtime.onStartup.addListener(function () {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js')
//       .then(function (registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(function (error) {
//         console.error('Service Worker registration failed:', error);
//       });
//   }
// });

// function FormatDuration(d: any) {
//   if (d < 0) {
//     return "?";
//   }
//   let divisor = d < 3600000 ? [60000, 1000] : [3600000, 60000];
//   function pad(x: any) {
//     return x < 10 ? "0" + x : x;
//   }
//   return Math.floor(d / divisor[0]) + ":" + pad(Math.floor((d % divisor[0]) / divisor[1]));
// }

// function UpdateBadges() {
//   let description = FormatDuration(new Date() - History);
//   chrome.action.setBadgeText({ 'text': description });
// }
// setInterval(UpdateBadges, 1000);

// function test() {
//   console.log('')
// }

// export default test