"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contador, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \" OLAAAA\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TempControl, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\nfunction colorControl() {}\nfunction TempControl() {\n    const { 0: temp , 1: setTemp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const { 0: colorTemp , 1: setColorTemp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"red\");\n    function addTemp() {\n        setTemp(temp + 1);\n        if (temp >= 20) {\n            setColorTemp(\"red\");\n        }\n    }\n    function decTemp() {\n        setTemp(temp - 1);\n        if (temp < 20) {\n            setColorTemp(\"blue\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Div, {\n        className: colorTemp,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"visor\",\n                    children: temp\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addTemp,\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: decTemp,\n                    children: \"-\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n            lineNumber: 34,\n            columnNumber: 40\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 13\n    }, this);\n}\nfunction Contador() {\n    const { 0: number , 1: setContador  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    function addNumber() {\n        setContador(number + 1);\n    }\n    function resetNumber() {\n        setContador(1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: number\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addNumber,\n                children: \"ADD\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: resetNumber,\n                children: \"RESET\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\davib\\\\Desktop\\\\DaviBogner\\\\ideias-teste\\\\pages\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNGO0FBQy9CLFNBQVNFLElBQUksR0FBRztJQUNaLHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsUUFBUTs7OztvQkFBWTswQkFDckIsOERBQUNELEtBQUc7MEJBQUMsU0FBTzs7Ozs7b0JBQU07MEJBQ2xCLDhEQUFDRSxXQUFXOzs7O29CQUFlOzs7Ozs7WUFFekIsQ0FDVDtBQUNMLENBQUM7QUFDRCxTQUFTQyxZQUFZLEdBQUUsQ0FFdkIsQ0FBQztBQUNELFNBQVNELFdBQVcsR0FBRTtJQUNsQixNQUFNLEtBQUNFLElBQUksTUFBQ0MsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxNQUFNLEtBQUNTLFNBQVMsTUFBQ0MsWUFBWSxNQUFJViwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUNoRCxTQUFTVyxPQUFPLEdBQUU7UUFDZEgsT0FBTyxDQUFDRCxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBR0EsSUFBSSxJQUFFLEVBQUUsRUFBQztZQUNSRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFDRCxTQUFTRSxPQUFPLEdBQUU7UUFDZEosT0FBTyxDQUFDRCxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBR0EsSUFBSSxHQUFDLEVBQUUsRUFBQztZQUNQRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsQ0FBQztJQUNMLENBQUM7SUFDRCxxQkFFUSw4REFBQ1Qsd0NBQUc7UUFBQ1ksU0FBUyxFQUFFSixTQUFTO2tCQUFFLDRFQUFDTixLQUFHOzs4QkFDM0IsOERBQUNBLEtBQUc7b0JBQUNVLFNBQVMsRUFBQyxPQUFPOzhCQUFFTixJQUFJOzs7Ozt3QkFBTzs4QkFDdkMsOERBQUNPLFFBQU07b0JBQUNDLE9BQU8sRUFBRUosT0FBTzs4QkFBRSxHQUFDOzs7Ozt3QkFBUzs4QkFDcEMsOERBQUNHLFFBQU07b0JBQUNDLE9BQU8sRUFBRUgsT0FBTzs4QkFBRSxHQUFDOzs7Ozt3QkFBUzs7Ozs7O2dCQUFNOzs7OztZQUFNLENBRW5EO0FBQ1QsQ0FBQztBQUNELFNBQVNSLFFBQVEsR0FBRTtJQUNmLE1BQU0sS0FBQ1ksTUFBTSxNQUFDQyxXQUFXLE1BQUlqQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxTQUFTa0IsU0FBUyxHQUFFO1FBQ2hCRCxXQUFXLENBQUNELE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBQ0QsU0FBU0csV0FBVyxHQUFFO1FBQ2xCRixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELHFCQUNJLDhEQUFDZCxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRzswQkFBRWEsTUFBTTs7Ozs7b0JBQU87MEJBQ25CLDhEQUFDRixRQUFNO2dCQUFDQyxPQUFPLEVBQUVHLFNBQVM7MEJBQUUsS0FBRzs7Ozs7b0JBQVM7MEJBQ3hDLDhEQUFDSixRQUFNO2dCQUFDQyxPQUFPLEVBQUVJLFdBQVc7MEJBQUUsT0FBSzs7Ozs7b0JBQVM7Ozs7OztZQUMxQyxDQUNUO0FBQ0wsQ0FBQztBQUdELGlFQUFlakIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRlaWFzLXRlc3RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGl2IH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFkb3I+PC9Db250YWRvcj5cclxuICAgICAgICAgICAgPGRpdj4gT0xBQUFBPC9kaXY+XHJcbiAgICAgICAgICAgIDxUZW1wQ29udHJvbD48L1RlbXBDb250cm9sPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgKSAgICAgICAgICAgICBcclxufVxyXG5mdW5jdGlvbiBjb2xvckNvbnRyb2woKXtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIFRlbXBDb250cm9sKCl7XHJcbiAgICBjb25zdCBbdGVtcCxzZXRUZW1wXSA9IHVzZVN0YXRlKDIwKTtcclxuICAgIGNvbnN0IFtjb2xvclRlbXAsc2V0Q29sb3JUZW1wXSA9IHVzZVN0YXRlKCdyZWQnKTtcclxuICAgIGZ1bmN0aW9uIGFkZFRlbXAoKXtcclxuICAgICAgICBzZXRUZW1wKHRlbXArMSk7XHJcbiAgICAgICAgaWYodGVtcD49MjApe1xyXG4gICAgICAgICAgICBzZXRDb2xvclRlbXAoJ3JlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlY1RlbXAoKXtcclxuICAgICAgICBzZXRUZW1wKHRlbXAtMSk7XHJcbiAgICAgICAgaWYodGVtcDwyMCl7XHJcbiAgICAgICAgICAgIHNldENvbG9yVGVtcCgnYmx1ZScpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8RGl2IGNsYXNzTmFtZT17Y29sb3JUZW1wfT48ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Zpc29yJz57dGVtcH08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUZW1wfT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVjVGVtcH0+LTwvYnV0dG9uPjwvZGl2PjwvRGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxufVxyXG5mdW5jdGlvbiBDb250YWRvcigpe1xyXG4gICAgY29uc3QgW251bWJlcixzZXRDb250YWRvcl0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGZ1bmN0aW9uIGFkZE51bWJlcigpe1xyXG4gICAgICAgIHNldENvbnRhZG9yKG51bWJlcisxKTsgICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc2V0TnVtYmVyKCl7XHJcbiAgICAgICAgc2V0Q29udGFkb3IoMSk7XHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntudW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkTnVtYmVyfT5BREQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldE51bWJlcn0+UkVTRVQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGl2IiwiSG9tZSIsImRpdiIsIkNvbnRhZG9yIiwiVGVtcENvbnRyb2wiLCJjb2xvckNvbnRyb2wiLCJ0ZW1wIiwic2V0VGVtcCIsImNvbG9yVGVtcCIsInNldENvbG9yVGVtcCIsImFkZFRlbXAiLCJkZWNUZW1wIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm51bWJlciIsInNldENvbnRhZG9yIiwiYWRkTnVtYmVyIiwicmVzZXROdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Div\": () => (/* binding */ Div)\n/* harmony export */ });\n/* harmony import */ var styled_components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components/ */ \"styled-components/\");\n/* harmony import */ var styled_components___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components___WEBPACK_IMPORTED_MODULE_0__);\n\nconst Div = (styled_components___WEBPACK_IMPORTED_MODULE_0___default().div)`\r\n    display: flexbox; \r\n    border-radius:20px;    \r\n    background-color: ${(props)=>props.className};\r\n    width: 160px;\r\n    border: 5px solid black;\r\n    justify-content: center;   \r\n    margin: 20px;\r\n    \r\n     \r\n    \r\n    div {\r\n        justify-content:center;\r\n        font-size: 50px; \r\n\r\n        & .visor {\r\n        border-radius:15px;\r\n        border:3px solid black;\r\n        text-align:center;\r\n        background-color:grey  ;\r\n\r\n    }\r\n    }\r\n    \r\n    button{\r\n        \r\n        background-color: black;\r\n        border-radius: 12px;\r\n        color: white;\r\n        padding: 20px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        display: inline;\r\n        font-size: 16px;\r\n        margin: 4px 2px;\r\n    }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBS2pDLE1BQU1DLEdBQUcsR0FBR0QsK0RBQVUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkZWlhcy10ZXN0ZS8uL3BhZ2VzL3N0eWxlcy5qcz82ZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMvJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleGJveDsgXHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpPT5wcm9wcy5jbGFzc05hbWV9O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4OyBcclxuXHJcbiAgICAgICAgJiAudmlzb3Ige1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JleSAgO1xyXG5cclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIH1cclxuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJEaXYiLCJkaXYiLCJwcm9wcyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/styles.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components/":
/*!*************************************!*\
  !*** external "styled-components/" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("styled-components/");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();