/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.navbar-list {\\r\\n  list-style-type: none;\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\n.navbar a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tvShowsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tvShowsApi.js */ \"./src/tvShowsApi.js\");\n/* harmony import */ var _commentsApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsApi.js */ \"./src/commentsApi.js\");\n\n\n\nconst calculateCommentsNumber = (commentId) => {\n  const commentsContent = document.querySelectorAll(`[comment-id=\"${commentId}\"]`)[0]\n    .parentElement.previousElementSibling.children;\n\n  const commentsCount = [...commentsContent].filter((elem) => elem.nodeName === 'P').length;\n\n  return commentsCount;\n};\n\nconst updateCommentTitle = (id) => {\n  const numberOfComments = calculateCommentsNumber(id);\n\n  const commentsContent = document.querySelectorAll(`[comment-id=\"${id}\"]`)[0]\n    .parentElement.previousElementSibling.children;\n\n  if (commentsContent.length > 0) {\n    const commentTitle = [...commentsContent].filter((elem) => elem.nodeName === 'H3')[0];\n\n    commentTitle.innerText = `Comments (${numberOfComments})`;\n  }\n};\n\nconst generatePopupContent = async (tvShow) => {\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n\n  popup.innerHTML = '';\n  const image = tvShow.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';\n\n  const tvShowId = tvShow.id;\n  const comments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(tvShowId);\n\n  let commentBlock = '';\n\n  popup.insertAdjacentHTML('beforeend', ` \n    <div class=\"popup-container\">\n      <div class=\"inner-content\">\n        <div class=\"photo-close\">\n          <img src=\"${image}\" />\n          <span type=\"button\" class=\"close-popup\"><i class=\"fas fa-times fa-2x\"></i></span>\n        </div>\n        <h2>${tvShow.name}</h2>\n        <div class=\"movie-description-1\">\n          <p>Type: ${tvShow.type}</p>\n          <p>Language: ${tvShow.language}</p>\n        </div>\n        <div class=\"movie-description-2\">\n          <p>Status: ${tvShow.status}</p>\n          <p>Premiered: ${tvShow.premiered}</p>\n        </div>\n        <div class=\"comments-display\">\n          ${commentBlock}\n        </div>\n        <div class=\"comment-create\">\n          <h3>Add a comment</h3>\n          <input name=\"username\" placeholder=\"Your name\" />\n          <textarea name=\"insights\" rows=\"6\">Your insights</textarea>\n          <button comment-id=\"${tvShow.id}\" class=\"btn-add-comment\">Comment</button>\n        </div>\n      </div>\n    </div>`);\n  document.querySelector('main').appendChild(popup);\n  const closeButton = document.getElementsByClassName('close-popup')[0];\n  closeButton.addEventListener('click', () => {\n    document.querySelector('.popup').remove();\n  });\n\n  const commentsDisplay = document.querySelectorAll(`[comment-id=\"${tvShow.id}\"]`)[0]\n    .parentElement.previousElementSibling;\n\n  if (comments.length > 0) {\n    commentBlock += '<h3>Comments</h3>';\n    comments.forEach((comment) => {\n      const date = comment.creation_date.split('-');\n      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;\n      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;\n    });\n  }\n  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);\n\n  updateCommentTitle(tvShow.id);\n\n  const commentButton = document.querySelectorAll(`[comment-id=\"${tvShow.id}\"]`)[0];\n  commentButton.addEventListener('click', async (e) => {\n    const commentObject = {\n      item_id: Number(e.target.getAttribute('comment-id')),\n      username: commentButton.previousElementSibling.previousElementSibling.value,\n      comment: commentButton.previousElementSibling.value,\n    };\n\n    const result = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.createComment)(commentObject);\n\n    if (result === 201) {\n      const comments = await (0,_commentsApi_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(tvShowId);\n      const lastComment = comments[comments.length - 1];\n      const commentsDisplay = document.querySelectorAll(`[comment-id=\"${tvShow.id}\"]`)[0]\n        .parentElement.previousElementSibling;\n      const date = lastComment.creation_date.split('-');\n      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;\n\n      if (comments.length === 1) {\n        commentsDisplay.insertAdjacentHTML('beforeend', `\n          <h3>Comments</h3>\n          <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>\n        `);\n      } else {\n        commentsDisplay.insertAdjacentHTML('beforeend', `\n          <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>\n        `);\n      }\n      updateCommentTitle(tvShow.id);\n    }\n  });\n};\n\nconst displayCommentPopup = async (id) => {\n  const tvShow = await (0,_tvShowsApi_js__WEBPACK_IMPORTED_MODULE_0__.getTvShowById)(id);\n  generatePopupContent(tvShow);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentPopup);\n\n\n//# sourceURL=webpack://webpackproject/./src/comments.js?");

/***/ }),

/***/ "./src/commentsApi.js":
/*!****************************!*\
  !*** ./src/commentsApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst tvShowsAppCode = '';\n\nconst commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvShowsAppCode}/comments`;\n\nconst createComment = async (obj) => {\n  const commentBody = {\n    item_id: obj.item_id,\n    username: obj.username,\n    comment: obj.comment,\n  };\n\n  const results = await fetch(commentsURL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(commentBody),\n  });\n\n  return results.status;\n};\n\nconst getComments = async (id) => {\n  try {\n    const result = await fetch(`${commentsURL}?item_id=${id}`);\n\n    const comments = await result.json();\n\n    return comments;\n  } catch (error) {\n    return [];\n  }\n};\n\n\n\n//# sourceURL=webpack://webpackproject/./src/commentsApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _listTvShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listTvShow.js */ \"./src/listTvShow.js\");\n\n\n\n\nfetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {\n    method: 'POST',\n}).then(response => response.text()).then(response => console.log(response));\n\n\n//document.addEventListener('DOMContentLoaded', () => { displayTvShows(); });\n\n//# sourceURL=webpack://webpackproject/./src/index.js?");

/***/ }),

/***/ "./src/likesApi.js":
/*!*************************!*\
  !*** ./src/likesApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst likeEndpoint = '';\n\nconst addLike = async (id) => {\n  const likeBody = {\n    item_id: id,\n  };\n\n  const response = await fetch(`${baseUrl}${likeEndpoint}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(likeBody),\n  });\n\n  return response.status;\n};\n\nconst getLikes = async () => {\n  const result = await fetch(`${baseUrl}${likeEndpoint}`);\n\n  const likes = await result.json();\n\n  if (likes.error?.status === 500 || likes.error?.status === 400) {\n    return [];\n  }\n\n  return likes;\n};\n\n//# sourceURL=webpack://webpackproject/./src/likesApi.js?");

/***/ }),

/***/ "./src/listTvShow.js":
/*!***************************!*\
  !*** ./src/listTvShow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tvShowsApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tvShowsApi.js */ \"./src/tvShowsApi.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _likesApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likesApi.js */ \"./src/likesApi.js\");\n\n\n\n\nconst countTvShows = () => {\n  const tvShowsCount = document.getElementById('tvshow-list').children.length;\n  return tvShowsCount;\n};\n\nconst updateTvShowHeader = (count) => {\n  const tvShowTitle = document.getElementById('tvShows-link');\n  tvShowTitle.innerText = `Tv-Shows (${count})`;\n};\n\nconst displayTvShows = async () => {\n  const tvShows = await (0,_tvShowsApi_js__WEBPACK_IMPORTED_MODULE_0__.getTvShows)();\n  const likes = await (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n\n  const tvShowsList = document.getElementById('tvshow-list');\n  tvShowsList.innerHTML = '';\n  /* eslint-disable no-await-in-loop */\n  for (let i = 0; i < tvShows.length; i += 1) {\n    const likeObject = likes.filter((like) => like.item_id === tvShows[i].show.id);\n\n    let numberOfLikes = '';\n    if (likeObject.length > 0) {\n      numberOfLikes = `${likeObject[0].likes} likes`;\n    }\n    const image = tvShows[i].show.image?.medium ?? 'https://pics.filmaffinity.com/sherlock_holmes-617003864-large.jpg';\n    tvShowsList.insertAdjacentHTML('beforeend', ` \n      <div class=\"tvshow-list-container\">\n        <div class=\"tvshow-listcontent\">\n          <img src=\"${image}\" />\n        </div>\n          <div>\n            <h2>${tvShows[i].show.name}</h2>\n            <p>${numberOfLikes}</p>\n          </div>\n          <button data-id=\"${tvShows[i].show.id}\" class=\"btn-comments\">Comments</button>\n          <span like-id=\"${tvShows[i].show.id}\" class=\"btn-likes\"><i class=\"fas fa-heart\"></i></span>\n      </div>`);\n\n    const button = document.querySelectorAll(`[data-id=\"${tvShows[i].show.id}\"]`)[0];\n    button.addEventListener('click', (e) => {\n      const tvShowId = e.target.getAttribute('data-id');\n      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tvShowId);\n    });\n\n    const likeBtn = document.querySelectorAll(`[like-id=\"${tvShows[i].show.id}\"]`)[0];\n    likeBtn.addEventListener('click', async (e) => {\n      const tvShowId = e.target.parentElement.parentElement.getAttribute('like-id');\n      const status = await (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(Number(tvShowId));\n      const newLikes = await (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)(tvShowId);\n      const newLikesObject = newLikes.filter((like) => like.item_id === tvShows[i].show.id);\n      const numberOfLikes = `${newLikesObject[0].likes} likes`;\n      if (status === 201) {\n        const likeDisplay = likeBtn.previousElementSibling.previousElementSibling.children[1];\n        likeDisplay.innerText = numberOfLikes;\n      }\n    });\n  }\n  const tvShowsCounter = countTvShows();\n  updateTvShowHeader(tvShowsCounter);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShows);\n\n//# sourceURL=webpack://webpackproject/./src/listTvShow.js?");

/***/ }),

/***/ "./src/tvShowsApi.js":
/*!***************************!*\
  !*** ./src/tvShowsApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTvShows\": () => (/* binding */ getTvShows),\n/* harmony export */   \"getTvShowById\": () => (/* binding */ getTvShowById)\n/* harmony export */ });\nconst searchMysteryTvShowsURL = 'https://api.tvmaze.com/search/shows?q=mystery';\nconst MysteryTvShowsBaseURL = 'https://api.tvmaze.com/shows/';\n\nconst getTvShows = async () => {\n  const results = await fetch(searchMysteryTvShowsURL);\n\n  const tvshows = await results.json();\n  return tvshows;\n};\n\nconst getTvShowById = async (id) => {\n  const result = await fetch(MysteryTvShowsBaseURL + id);\n\n  const tvshow = await result.json();\n  return tvshow;\n};\n\n\n\n//# sourceURL=webpack://webpackproject/./src/tvShowsApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;