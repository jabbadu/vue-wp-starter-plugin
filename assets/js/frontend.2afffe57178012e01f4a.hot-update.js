"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethree"]("frontend",{

/***/ "./src/frontend/main.js":
/*!******************************!*\
  !*** ./src/frontend/main.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/frontend/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/frontend/router/index.js\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n/* harmony import */ var _stores_general_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores/general.js */ \"./src/frontend/stores/general.js\");\n\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconst pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_4__.createPinia)();\napp.use(pinia);\napp.use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n// Autoimport store to all components\napp.provide('generalStore', (0,_stores_general_js__WEBPACK_IMPORTED_MODULE_3__.useGeneralStore)());\napp.mount(\"#pluginbase-frontend-app\");\n\n//# sourceURL=webpack://three/./src/frontend/main.js?");

/***/ })

});