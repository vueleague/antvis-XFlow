(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{zBT1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BlwA");\n/* harmony import */ var dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2NSI");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "igraphcommandservice"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#igraphcommandservice",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IGraphCommandService"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_graphin_es_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    code: "export interface IGraphCommandService {\\n  /** event\uff1a\u53ef\u4ee5\u76d1\u542cCommandService\u7684\u53d8\u5316 */\\n  onDidChange: IOnDidChange<null>\\n  /** \u64a4\u9500\u547d\u4ee4 */\\n  undoCommand: () => Promise<void>\\n  /** \u91cd\u505a\u547d\u4ee4 */\\n  redoCommand: () => Promise<void>\\n  /** \u662f\u5426\u53ef\u91cd\u505a */\\n  isRedoable: boolean\\n  /** \u662f\u5426\u53ef\u64a4\u9500 */\\n  isUndoable: boolean\\n  /** \u6267\u884c\u539f\u5b50\u547d\u4ee4\uff1a\u4f1a\u5728undo stack\u4e2dpush cmd */\\n  executeCommand<Args, Result = any>(\\n    command: string,\\n    args: Args,\\n    hooks?: IRuntimeHook<Args, Result>,\\n  ): Promise<ICommandHandler<Args, Result> | undefined>\\n  /** \u7528pipeline\u6267\u884c\u547d\u4ee4 */\\n  executeCommandPipeline: (\\n    cmdOptions: IGraphPipelineCommand[],\\n  ) => Promise<ICommandHandler | undefined>\\n  /** \u6267\u884c\u64a4\u9500\u547d\u4ee4\uff1a\u4e0d\u4f1a\u5728undo stack\u4e2dpush\u65b0\u7684command\u8bb0\u5f55 */\\n  executeUndoCommand<Args, Result = any>(\\n    command: string,\\n    args: Args,\\n    hooks?: IRuntimeHook<Args, Result>,\\n  ): Promise<ICommandHandler<Args, Result> | undefined>\\n}",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/api/interface/command.md?')}}]);