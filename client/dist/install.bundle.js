/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById('buttonInstall'); // Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\n\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  //store the triggered events\n  window.deferredPrompt = event; //remove the hidden class\n\n  butInstall.classList.toggle('hidden', false);\n}); // TODO: Implement a click event handler on the `butInstall` element\n\nbutInstall.addEventListener('click', function () {\n  console.log('install this app');\n  var promptEvent = window.deferredPrompt;\n\n  if (!promptEvent) {\n    return;\n  }\n\n  console.log(promptEvent); // Show prompt\n\n  promptEvent.prompt(); // Reset the deferred prompt variable, it can only be used once.\n\n  window.deferredPrompt = null; // remove the instlall button by adding hidden class back\n\n  butInstall.classList.toggle('hidden', true);\n}); // TODO: Add an handler for the `appinstalled` event\n\nwindow.addEventListener('appinstalled', function (event) {\n  // console log to confirm app was installed\n  console.log('APP installed successfully'); // set deferred prompt to null\n\n  window.deferredPrompt = null;\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;