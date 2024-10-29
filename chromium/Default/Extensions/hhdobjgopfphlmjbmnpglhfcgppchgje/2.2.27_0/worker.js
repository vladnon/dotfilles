/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/* eslint-disable no-console */
/**
 * Worker receives url from the offscreen document and fetches it.
 * For more details on this worker read ProxyAuthTrigger.
 * @param e Message event
 */
onmessage = function onmessage(e) {
  // cant use logger since local storage is not available here
  console.log("worker created by offscreen document received: ".concat(e.data));
  fetch(e.data).then(function () {
    console.log('url fetched successfully');
  }).catch(function (ex) {
    console.log("during fetching: ".concat(e.data, ", error occurred: ").concat(ex));
  });
};
/******/ })()
;