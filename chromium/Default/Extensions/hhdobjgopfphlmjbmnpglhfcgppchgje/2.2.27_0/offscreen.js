/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/* eslint-disable no-console */
var myWorker = new Worker('worker.js');

/**
 * For more details on this worker see ProxyAuthTrigger.
 * We don't use standard chrome.runtime.onMessage event in order to avoid conflicts with other messages handlers.
 * When we receive a message from the service worker, we send it to the worker.
 */
navigator.serviceWorker.addEventListener('message', function (e) {
  // cant use logger since local storage is not available here
  console.log("offscreen document received message: ".concat(e.data));
  myWorker.postMessage(e.data);
});
/******/ })()
;