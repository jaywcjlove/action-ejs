/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 228:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 506:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 926:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 575:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(489);

var isNativeReflectConstruct = __webpack_require__(67);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 913:
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var unsupportedIterableToArray = __webpack_require__(379);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(754);

var isNativeReflectConstruct = __webpack_require__(67);

var possibleConstructorReturn = __webpack_require__(585);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 713:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 754:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(489);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 430:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 67:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(713);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8)["default"]);

var assertThisInitialized = __webpack_require__(506);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 489:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(228);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(754);

var setPrototypeOf = __webpack_require__(489);

var isNativeFunction = __webpack_require__(430);

var construct = __webpack_require__(100);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(961);


/***/ }),

/***/ 28:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = (__webpack_require__(575)["default"]);

var _createClass = (__webpack_require__(913)["default"]);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issue = exports.issueCommand = void 0;

var os = __importStar(__webpack_require__(37));

var utils_1 = __webpack_require__(600);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */


function issueCommand(command, properties, message) {
  var cmd = new Command(command, properties, message);
  process.stdout.write(cmd.toString() + os.EOL);
}

exports.issueCommand = issueCommand;

function issue(name) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  issueCommand(name, {}, message);
}

exports.issue = issue;
var CMD_STRING = '::';

var Command = /*#__PURE__*/function () {
  function Command(command, properties, message) {
    _classCallCheck(this, Command);

    if (!command) {
      command = 'missing.command';
    }

    this.command = command;
    this.properties = properties;
    this.message = message;
  }

  _createClass(Command, [{
    key: "toString",
    value: function toString() {
      var cmdStr = CMD_STRING + this.command;

      if (this.properties && Object.keys(this.properties).length > 0) {
        cmdStr += ' ';
        var first = true;

        for (var key in this.properties) {
          if (this.properties.hasOwnProperty(key)) {
            var val = this.properties[key];

            if (val) {
              if (first) {
                first = false;
              } else {
                cmdStr += ',';
              }

              cmdStr += "".concat(key, "=").concat(escapeProperty(val));
            }
          }
        }
      }

      cmdStr += "".concat(CMD_STRING).concat(escapeData(this.message));
      return cmdStr;
    }
  }]);

  return Command;
}();

function escapeData(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}

function escapeProperty(s) {
  return utils_1.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
}

/***/ }),

/***/ 397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(757);

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;

var command_1 = __webpack_require__(28);

var file_command_1 = __webpack_require__(35);

var utils_1 = __webpack_require__(600);

var os = __importStar(__webpack_require__(37));

var path = __importStar(__webpack_require__(17));

var oidc_utils_1 = __webpack_require__(335);
/**
 * The code to exit an action
 */


var ExitCode;

(function (ExitCode) {
  /**
   * A code indicating that the action was successful
   */
  ExitCode[ExitCode["Success"] = 0] = "Success";
  /**
   * A code indicating that the action was a failure
   */

  ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {})); //-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------

/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


function exportVariable(name, val) {
  var convertedVal = utils_1.toCommandValue(val);
  process.env[name] = convertedVal;
  var filePath = process.env['GITHUB_ENV'] || '';

  if (filePath) {
    var delimiter = '_GitHubActionsFileCommandDelimeter_';
    var commandValue = "".concat(name, "<<").concat(delimiter).concat(os.EOL).concat(convertedVal).concat(os.EOL).concat(delimiter);
    file_command_1.issueCommand('ENV', commandValue);
  } else {
    command_1.issueCommand('set-env', {
      name: name
    }, convertedVal);
  }
}

exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */

function setSecret(secret) {
  command_1.issueCommand('add-mask', {}, secret);
}

exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */

function addPath(inputPath) {
  var filePath = process.env['GITHUB_PATH'] || '';

  if (filePath) {
    file_command_1.issueCommand('PATH', inputPath);
  } else {
    command_1.issueCommand('add-path', {}, inputPath);
  }

  process.env['PATH'] = "".concat(inputPath).concat(path.delimiter).concat(process.env['PATH']);
}

exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */

function getInput(name, options) {
  var val = process.env["INPUT_".concat(name.replace(/ /g, '_').toUpperCase())] || '';

  if (options && options.required && !val) {
    throw new Error("Input required and not supplied: ".concat(name));
  }

  if (options && options.trimWhitespace === false) {
    return val;
  }

  return val.trim();
}

exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */

function getMultilineInput(name, options) {
  var inputs = getInput(name, options).split('\n').filter(function (x) {
    return x !== '';
  });
  return inputs;
}

exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */

function getBooleanInput(name, options) {
  var trueValue = ['true', 'True', 'TRUE'];
  var falseValue = ['false', 'False', 'FALSE'];
  var val = getInput(name, options);
  if (trueValue.includes(val)) return true;
  if (falseValue.includes(val)) return false;
  throw new TypeError("Input does not meet YAML 1.2 \"Core Schema\" specification: ".concat(name, "\n") + "Support boolean input list: `true | True | TRUE | false | False | FALSE`");
}

exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function setOutput(name, value) {
  process.stdout.write(os.EOL);
  command_1.issueCommand('set-output', {
    name: name
  }, value);
}

exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */

function setCommandEcho(enabled) {
  command_1.issue('echo', enabled ? 'on' : 'off');
}

exports.setCommandEcho = setCommandEcho; //-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------

/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */

function setFailed(message) {
  process.exitCode = ExitCode.Failure;
  error(message);
}

exports.setFailed = setFailed; //-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------

/**
 * Gets whether Actions Step Debug is on or not
 */

function isDebug() {
  return process.env['RUNNER_DEBUG'] === '1';
}

exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */

function debug(message) {
  command_1.issueCommand('debug', {}, message);
}

exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function error(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function warning(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */

function notice(message) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}

exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */

function info(message) {
  process.stdout.write(message + os.EOL);
}

exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */

function startGroup(name) {
  command_1.issue('group', name);
}

exports.startGroup = startGroup;
/**
 * End an output group.
 */

function endGroup() {
  command_1.issue('endgroup');
}

exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */

function group(name, fn) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var result;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            startGroup(name);
            _context.prev = 1;
            _context.next = 4;
            return fn();

          case 4:
            result = _context.sent;

          case 5:
            _context.prev = 5;
            endGroup();
            return _context.finish(5);

          case 8:
            return _context.abrupt("return", result);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1,, 5, 8]]);
  }));
}

exports.group = group; //-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------

/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function saveState(name, value) {
  command_1.issueCommand('save-state', {
    name: name
  }, value);
}

exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */

function getState(name) {
  return process.env["STATE_".concat(name)] || '';
}

exports.getState = getState;

function getIDToken(aud) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return oidc_utils_1.OidcClient.getIDToken(aud);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}

exports.getIDToken = getIDToken;

/***/ }),

/***/ 35:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
 // For internal use, subject to change.

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.issueCommand = void 0; // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

var fs = __importStar(__webpack_require__(147));

var os = __importStar(__webpack_require__(37));

var utils_1 = __webpack_require__(600);

function issueCommand(command, message) {
  var filePath = process.env["GITHUB_".concat(command)];

  if (!filePath) {
    throw new Error("Unable to find environment variable for file command ".concat(command));
  }

  if (!fs.existsSync(filePath)) {
    throw new Error("Missing file at path: ".concat(filePath));
  }

  fs.appendFileSync(filePath, "".concat(utils_1.toCommandValue(message)).concat(os.EOL), {
    encoding: 'utf8'
  });
}

exports.issueCommand = issueCommand;

/***/ }),

/***/ 335:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(757);

var _classCallCheck = (__webpack_require__(575)["default"]);

var _createClass = (__webpack_require__(913)["default"]);

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OidcClient = void 0;

var http_client_1 = __webpack_require__(710);

var auth_1 = __webpack_require__(290);

var core_1 = __webpack_require__(397);

var OidcClient = /*#__PURE__*/function () {
  function OidcClient() {
    _classCallCheck(this, OidcClient);
  }

  _createClass(OidcClient, null, [{
    key: "createHttpClient",
    value: function createHttpClient() {
      var allowRetry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var maxRetry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
  }, {
    key: "getRequestToken",
    value: function getRequestToken() {
      var token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];

      if (!token) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
      }

      return token;
    }
  }, {
    key: "getIDTokenUrl",
    value: function getIDTokenUrl() {
      var runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];

      if (!runtimeUrl) {
        throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
      }

      return runtimeUrl;
    }
  }, {
    key: "getCall",
    value: function getCall(id_token_url) {
      var _a;

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var httpclient, res, id_token;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                httpclient = OidcClient.createHttpClient();
                _context.next = 3;
                return httpclient.getJson(id_token_url)["catch"](function (error) {
                  throw new Error("Failed to get ID Token. \n \n        Error Code : ".concat(error.statusCode, "\n \n        Error Message: ").concat(error.result.message));
                });

              case 3:
                res = _context.sent;
                id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;

                if (id_token) {
                  _context.next = 7;
                  break;
                }

                throw new Error('Response json body do not have ID Token field');

              case 7:
                return _context.abrupt("return", id_token);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "getIDToken",
    value: function getIDToken(audience) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var id_token_url, encodedAudience, id_token;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                // New ID Token is requested from action service
                id_token_url = OidcClient.getIDTokenUrl();

                if (audience) {
                  encodedAudience = encodeURIComponent(audience);
                  id_token_url = "".concat(id_token_url, "&audience=").concat(encodedAudience);
                }

                core_1.debug("ID token url is ".concat(id_token_url));
                _context2.next = 6;
                return OidcClient.getCall(id_token_url);

              case 6:
                id_token = _context2.sent;
                core_1.setSecret(id_token);
                return _context2.abrupt("return", id_token);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                throw new Error("Error message: ".concat(_context2.t0.message));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));
    }
  }]);

  return OidcClient;
}();

exports.OidcClient = OidcClient;

/***/ }),

/***/ 600:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
 // We use any as a valid input type

/* eslint-disable @typescript-eslint/no-explicit-any */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */

function toCommandValue(input) {
  if (input === null || input === undefined) {
    return '';
  } else if (typeof input === 'string' || input instanceof String) {
    return input;
  }

  return JSON.stringify(input);
}

exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */

function toCommandProperties(annotationProperties) {
  if (!Object.keys(annotationProperties).length) {
    return {};
  }

  return {
    title: annotationProperties.title,
    file: annotationProperties.file,
    line: annotationProperties.startLine,
    endLine: annotationProperties.endLine,
    col: annotationProperties.startColumn,
    endColumn: annotationProperties.endColumn
  };
}

exports.toCommandProperties = toCommandProperties;

/***/ }),

/***/ 290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _classCallCheck = (__webpack_require__(575)["default"]);

var _createClass = (__webpack_require__(913)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var BasicCredentialHandler = /*#__PURE__*/function () {
  function BasicCredentialHandler(username, password) {
    _classCallCheck(this, BasicCredentialHandler);

    this.username = username;
    this.password = password;
  }

  _createClass(BasicCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64');
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return BasicCredentialHandler;
}();

exports.BasicCredentialHandler = BasicCredentialHandler;

var BearerCredentialHandler = /*#__PURE__*/function () {
  function BearerCredentialHandler(token) {
    _classCallCheck(this, BearerCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(BearerCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Bearer ' + this.token;
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return BearerCredentialHandler;
}();

exports.BearerCredentialHandler = BearerCredentialHandler;

var PersonalAccessTokenCredentialHandler = /*#__PURE__*/function () {
  function PersonalAccessTokenCredentialHandler(token) {
    _classCallCheck(this, PersonalAccessTokenCredentialHandler);

    this.token = token;
  } // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401


  _createClass(PersonalAccessTokenCredentialHandler, [{
    key: "prepareRequest",
    value: function prepareRequest(options) {
      options.headers['Authorization'] = 'Basic ' + Buffer.from('PAT:' + this.token).toString('base64');
    } // This handler cannot handle 401

  }, {
    key: "canHandleAuthentication",
    value: function canHandleAuthentication(response) {
      return false;
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication(httpClient, requestInfo, objs) {
      return null;
    }
  }]);

  return PersonalAccessTokenCredentialHandler;
}();

exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;

/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _objectSpread = (__webpack_require__(109)["default"]);

var _regeneratorRuntime = __webpack_require__(757);

var _asyncToGenerator = (__webpack_require__(926)["default"]);

var _createClass = (__webpack_require__(913)["default"]);

var _classCallCheck = (__webpack_require__(575)["default"]);

var _assertThisInitialized = (__webpack_require__(506)["default"]);

var _inherits = (__webpack_require__(205)["default"]);

var _createSuper = (__webpack_require__(842)["default"]);

var _wrapNativeSuper = (__webpack_require__(957)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var http = __webpack_require__(685);

var https = __webpack_require__(687);

var pm = __webpack_require__(725);

var tunnel;
var HttpCodes;

(function (HttpCodes) {
  HttpCodes[HttpCodes["OK"] = 200] = "OK";
  HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
  HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
  HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
  HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
  HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
  HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
  HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
  HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
  HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
  HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
  HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
  HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
  HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
  HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
  HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
  HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
  HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
  HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
  HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
  HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
  HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));

var Headers;

(function (Headers) {
  Headers["Accept"] = "accept";
  Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));

var MediaTypes;

(function (MediaTypes) {
  MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */


function getProxyUrl(serverUrl) {
  var proxyUrl = pm.getProxyUrl(new URL(serverUrl));
  return proxyUrl ? proxyUrl.href : '';
}

exports.getProxyUrl = getProxyUrl;
var HttpRedirectCodes = [HttpCodes.MovedPermanently, HttpCodes.ResourceMoved, HttpCodes.SeeOther, HttpCodes.TemporaryRedirect, HttpCodes.PermanentRedirect];
var HttpResponseRetryCodes = [HttpCodes.BadGateway, HttpCodes.ServiceUnavailable, HttpCodes.GatewayTimeout];
var RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
var ExponentialBackoffCeiling = 10;
var ExponentialBackoffTimeSlice = 5;

var HttpClientError = /*#__PURE__*/function (_Error) {
  _inherits(HttpClientError, _Error);

  var _super = _createSuper(HttpClientError);

  function HttpClientError(message, statusCode) {
    var _this;

    _classCallCheck(this, HttpClientError);

    _this = _super.call(this, message);
    _this.name = 'HttpClientError';
    _this.statusCode = statusCode;
    Object.setPrototypeOf(_assertThisInitialized(_this), HttpClientError.prototype);
    return _this;
  }

  return _createClass(HttpClientError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.HttpClientError = HttpClientError;

var HttpClientResponse = /*#__PURE__*/function () {
  function HttpClientResponse(message) {
    _classCallCheck(this, HttpClientResponse);

    this.message = message;
  }

  _createClass(HttpClientResponse, [{
    key: "readBody",
    value: function readBody() {
      var _this2 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {
          var output;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  output = Buffer.alloc(0);

                  _this2.message.on('data', function (chunk) {
                    output = Buffer.concat([output, chunk]);
                  });

                  _this2.message.on('end', function () {
                    resolve(output.toString());
                  });

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return HttpClientResponse;
}();

exports.HttpClientResponse = HttpClientResponse;

function isHttps(requestUrl) {
  var parsedUrl = new URL(requestUrl);
  return parsedUrl.protocol === 'https:';
}

exports.isHttps = isHttps;

var HttpClient = /*#__PURE__*/function () {
  function HttpClient(userAgent, handlers, requestOptions) {
    _classCallCheck(this, HttpClient);

    this._ignoreSslError = false;
    this._allowRedirects = true;
    this._allowRedirectDowngrade = false;
    this._maxRedirects = 50;
    this._allowRetries = false;
    this._maxRetries = 1;
    this._keepAlive = false;
    this._disposed = false;
    this.userAgent = userAgent;
    this.handlers = handlers || [];
    this.requestOptions = requestOptions;

    if (requestOptions) {
      if (requestOptions.ignoreSslError != null) {
        this._ignoreSslError = requestOptions.ignoreSslError;
      }

      this._socketTimeout = requestOptions.socketTimeout;

      if (requestOptions.allowRedirects != null) {
        this._allowRedirects = requestOptions.allowRedirects;
      }

      if (requestOptions.allowRedirectDowngrade != null) {
        this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
      }

      if (requestOptions.maxRedirects != null) {
        this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
      }

      if (requestOptions.keepAlive != null) {
        this._keepAlive = requestOptions.keepAlive;
      }

      if (requestOptions.allowRetries != null) {
        this._allowRetries = requestOptions.allowRetries;
      }

      if (requestOptions.maxRetries != null) {
        this._maxRetries = requestOptions.maxRetries;
      }
    }
  }

  _createClass(HttpClient, [{
    key: "options",
    value: function options(requestUrl, additionalHeaders) {
      return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "get",
    value: function get(requestUrl, additionalHeaders) {
      return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "del",
    value: function del(requestUrl, additionalHeaders) {
      return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "post",
    value: function post(requestUrl, data, additionalHeaders) {
      return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "patch",
    value: function patch(requestUrl, data, additionalHeaders) {
      return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "put",
    value: function put(requestUrl, data, additionalHeaders) {
      return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
  }, {
    key: "head",
    value: function head(requestUrl, additionalHeaders) {
      return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
  }, {
    key: "sendStream",
    value: function sendStream(verb, requestUrl, stream, additionalHeaders) {
      return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */

  }, {
    key: "getJson",
    value: function () {
      var _getJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(requestUrl) {
        var additionalHeaders,
            res,
            _args2 = arguments;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                additionalHeaders = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                _context2.next = 4;
                return this.get(requestUrl, additionalHeaders);

              case 4:
                res = _context2.sent;
                return _context2.abrupt("return", this._processResponse(res, this.requestOptions));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getJson(_x3) {
        return _getJson.apply(this, arguments);
      }

      return getJson;
    }()
  }, {
    key: "postJson",
    value: function () {
      var _postJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args3 = arguments;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                additionalHeaders = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context3.next = 6;
                return this.post(requestUrl, data, additionalHeaders);

              case 6:
                res = _context3.sent;
                return _context3.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function postJson(_x4, _x5) {
        return _postJson.apply(this, arguments);
      }

      return postJson;
    }()
  }, {
    key: "putJson",
    value: function () {
      var _putJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args4 = arguments;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                additionalHeaders = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context4.next = 6;
                return this.put(requestUrl, data, additionalHeaders);

              case 6:
                res = _context4.sent;
                return _context4.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function putJson(_x6, _x7) {
        return _putJson.apply(this, arguments);
      }

      return putJson;
    }()
  }, {
    key: "patchJson",
    value: function () {
      var _patchJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(requestUrl, obj) {
        var additionalHeaders,
            data,
            res,
            _args5 = arguments;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                additionalHeaders = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                data = JSON.stringify(obj, null, 2);
                additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                _context5.next = 6;
                return this.patch(requestUrl, data, additionalHeaders);

              case 6:
                res = _context5.sent;
                return _context5.abrupt("return", this._processResponse(res, this.requestOptions));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function patchJson(_x8, _x9) {
        return _patchJson.apply(this, arguments);
      }

      return patchJson;
    }()
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */

  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(verb, requestUrl, data, headers) {
        var parsedUrl, info, maxTries, numTries, response, authenticationHandler, i, redirectsRemaining, redirectUrl, parsedRedirectUrl, header;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this._disposed) {
                  _context6.next = 2;
                  break;
                }

                throw new Error('Client has already been disposed.');

              case 2:
                parsedUrl = new URL(requestUrl);
                info = this._prepareRequest(verb, parsedUrl, headers); // Only perform retries on reads since writes may not be idempotent.

                maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1 ? this._maxRetries + 1 : 1;
                numTries = 0;

              case 6:
                if (!(numTries < maxTries)) {
                  _context6.next = 53;
                  break;
                }

                _context6.next = 9;
                return this.requestRaw(info, data);

              case 9:
                response = _context6.sent;

                if (!(response && response.message && response.message.statusCode === HttpCodes.Unauthorized)) {
                  _context6.next = 25;
                  break;
                }

                authenticationHandler = void 0;
                i = 0;

              case 13:
                if (!(i < this.handlers.length)) {
                  _context6.next = 20;
                  break;
                }

                if (!this.handlers[i].canHandleAuthentication(response)) {
                  _context6.next = 17;
                  break;
                }

                authenticationHandler = this.handlers[i];
                return _context6.abrupt("break", 20);

              case 17:
                i++;
                _context6.next = 13;
                break;

              case 20:
                if (!authenticationHandler) {
                  _context6.next = 24;
                  break;
                }

                return _context6.abrupt("return", authenticationHandler.handleAuthentication(this, info, data));

              case 24:
                return _context6.abrupt("return", response);

              case 25:
                redirectsRemaining = this._maxRedirects;

              case 26:
                if (!(HttpRedirectCodes.indexOf(response.message.statusCode) != -1 && this._allowRedirects && redirectsRemaining > 0)) {
                  _context6.next = 43;
                  break;
                }

                redirectUrl = response.message.headers['location'];

                if (redirectUrl) {
                  _context6.next = 30;
                  break;
                }

                return _context6.abrupt("break", 43);

              case 30:
                parsedRedirectUrl = new URL(redirectUrl);

                if (!(parsedUrl.protocol == 'https:' && parsedUrl.protocol != parsedRedirectUrl.protocol && !this._allowRedirectDowngrade)) {
                  _context6.next = 33;
                  break;
                }

                throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');

              case 33:
                _context6.next = 35;
                return response.readBody();

              case 35:
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                  for (header in headers) {
                    // header names are case insensitive
                    if (header.toLowerCase() === 'authorization') {
                      delete headers[header];
                    }
                  }
                } // let's make the request with the new redirectUrl


                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                _context6.next = 39;
                return this.requestRaw(info, data);

              case 39:
                response = _context6.sent;
                redirectsRemaining--;
                _context6.next = 26;
                break;

              case 43:
                if (!(HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1)) {
                  _context6.next = 45;
                  break;
                }

                return _context6.abrupt("return", response);

              case 45:
                numTries += 1;

                if (!(numTries < maxTries)) {
                  _context6.next = 51;
                  break;
                }

                _context6.next = 49;
                return response.readBody();

              case 49:
                _context6.next = 51;
                return this._performExponentialBackoff(numTries);

              case 51:
                _context6.next = 6;
                break;

              case 53:
                return _context6.abrupt("return", response);

              case 54:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function request(_x10, _x11, _x12, _x13) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (this._agent) {
        this._agent.destroy();
      }

      this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */

  }, {
    key: "requestRaw",
    value: function requestRaw(info, data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var callbackForResult = function callbackForResult(err, res) {
          if (err) {
            reject(err);
          }

          resolve(res);
        };

        _this3.requestRawWithCallback(info, data, callbackForResult);
      });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */

  }, {
    key: "requestRawWithCallback",
    value: function requestRawWithCallback(info, data, onResult) {
      var socket;

      if (typeof data === 'string') {
        info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
      }

      var callbackCalled = false;

      var handleResult = function handleResult(err, res) {
        if (!callbackCalled) {
          callbackCalled = true;
          onResult(err, res);
        }
      };

      var req = info.httpModule.request(info.options, function (msg) {
        var res = new HttpClientResponse(msg);
        handleResult(null, res);
      });
      req.on('socket', function (sock) {
        socket = sock;
      }); // If we ever get disconnected, we want the socket to timeout eventually

      req.setTimeout(this._socketTimeout || 3 * 60000, function () {
        if (socket) {
          socket.end();
        }

        handleResult(new Error('Request timeout: ' + info.options.path), null);
      });
      req.on('error', function (err) {
        // err has statusCode property
        // res should have headers
        handleResult(err, null);
      });

      if (data && typeof data === 'string') {
        req.write(data, 'utf8');
      }

      if (data && typeof data !== 'string') {
        data.on('close', function () {
          req.end();
        });
        data.pipe(req);
      } else {
        req.end();
      }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */

  }, {
    key: "getAgent",
    value: function getAgent(serverUrl) {
      var parsedUrl = new URL(serverUrl);
      return this._getAgent(parsedUrl);
    }
  }, {
    key: "_prepareRequest",
    value: function _prepareRequest(method, requestUrl, headers) {
      var info = {};
      info.parsedUrl = requestUrl;
      var usingSsl = info.parsedUrl.protocol === 'https:';
      info.httpModule = usingSsl ? https : http;
      var defaultPort = usingSsl ? 443 : 80;
      info.options = {};
      info.options.host = info.parsedUrl.hostname;
      info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
      info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
      info.options.method = method;
      info.options.headers = this._mergeHeaders(headers);

      if (this.userAgent != null) {
        info.options.headers['user-agent'] = this.userAgent;
      }

      info.options.agent = this._getAgent(info.parsedUrl); // gives handlers an opportunity to participate

      if (this.handlers) {
        this.handlers.forEach(function (handler) {
          handler.prepareRequest(info.options);
        });
      }

      return info;
    }
  }, {
    key: "_mergeHeaders",
    value: function _mergeHeaders(headers) {
      var lowercaseKeys = function lowercaseKeys(obj) {
        return Object.keys(obj).reduce(function (c, k) {
          return c[k.toLowerCase()] = obj[k], c;
        }, {});
      };

      if (this.requestOptions && this.requestOptions.headers) {
        return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
      }

      return lowercaseKeys(headers || {});
    }
  }, {
    key: "_getExistingOrDefaultHeader",
    value: function _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
      var lowercaseKeys = function lowercaseKeys(obj) {
        return Object.keys(obj).reduce(function (c, k) {
          return c[k.toLowerCase()] = obj[k], c;
        }, {});
      };

      var clientHeader;

      if (this.requestOptions && this.requestOptions.headers) {
        clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
      }

      return additionalHeaders[header] || clientHeader || _default;
    }
  }, {
    key: "_getAgent",
    value: function _getAgent(parsedUrl) {
      var agent;
      var proxyUrl = pm.getProxyUrl(parsedUrl);
      var useProxy = proxyUrl && proxyUrl.hostname;

      if (this._keepAlive && useProxy) {
        agent = this._proxyAgent;
      }

      if (this._keepAlive && !useProxy) {
        agent = this._agent;
      } // if agent is already assigned use that agent.


      if (!!agent) {
        return agent;
      }

      var usingSsl = parsedUrl.protocol === 'https:';
      var maxSockets = 100;

      if (!!this.requestOptions) {
        maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
      }

      if (useProxy) {
        // If using proxy, need tunnel
        if (!tunnel) {
          tunnel = __webpack_require__(808);
        }

        var agentOptions = {
          maxSockets: maxSockets,
          keepAlive: this._keepAlive,
          proxy: _objectSpread(_objectSpread({}, (proxyUrl.username || proxyUrl.password) && {
            proxyAuth: "".concat(proxyUrl.username, ":").concat(proxyUrl.password)
          }), {}, {
            host: proxyUrl.hostname,
            port: proxyUrl.port
          })
        };
        var tunnelAgent;
        var overHttps = proxyUrl.protocol === 'https:';

        if (usingSsl) {
          tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
        } else {
          tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
        }

        agent = tunnelAgent(agentOptions);
        this._proxyAgent = agent;
      } // if reusing agent across request and tunneling agent isn't assigned create a new agent


      if (this._keepAlive && !agent) {
        var options = {
          keepAlive: this._keepAlive,
          maxSockets: maxSockets
        };
        agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
        this._agent = agent;
      } // if not using private agent and tunnel agent isn't setup then use global agent


      if (!agent) {
        agent = usingSsl ? https.globalAgent : http.globalAgent;
      }

      if (usingSsl && this._ignoreSslError) {
        // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
        // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
        // we have to cast it to any and change it directly
        agent.options = Object.assign(agent.options || {}, {
          rejectUnauthorized: false
        });
      }

      return agent;
    }
  }, {
    key: "_performExponentialBackoff",
    value: function _performExponentialBackoff(retryNumber) {
      retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
      var ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve();
        }, ms);
      });
    }
  }, {
    key: "_processResponse",
    value: function () {
      var _processResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(res, options) {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(resolve, reject) {
                    var statusCode, response, obj, contents, msg, err;
                    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            statusCode = res.message.statusCode;
                            response = {
                              statusCode: statusCode,
                              result: null,
                              headers: {}
                            }; // not found leads to null obj returned

                            // not found leads to null obj returned
                            if (statusCode == HttpCodes.NotFound) {
                              resolve(response);
                            }

                            _context7.prev = 3;
                            _context7.next = 6;
                            return res.readBody();

                          case 6:
                            contents = _context7.sent;

                            if (contents && contents.length > 0) {
                              if (options && options.deserializeDates) {
                                obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                              } else {
                                obj = JSON.parse(contents);
                              }

                              response.result = obj;
                            }

                            response.headers = res.message.headers;
                            _context7.next = 13;
                            break;

                          case 11:
                            _context7.prev = 11;
                            _context7.t0 = _context7["catch"](3);

                          case 13:
                            // note that 3xx redirects are handled by the http layer.
                            if (statusCode > 299) {
                              // if exception/error in body, attempt to get better error
                              if (obj && obj.message) {
                                msg = obj.message;
                              } else if (contents && contents.length > 0) {
                                // it may be the case that the exception is in the body message as string
                                msg = contents;
                              } else {
                                msg = 'Failed request: (' + statusCode + ')';
                              }

                              err = new HttpClientError(msg, statusCode);
                              err.result = response.result;
                              reject(err);
                            } else {
                              resolve(response);
                            }

                          case 14:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, null, [[3, 11]]);
                  }));

                  return function (_x16, _x17) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function _processResponse(_x14, _x15) {
        return _processResponse2.apply(this, arguments);
      }

      return _processResponse;
    }()
  }], [{
    key: "dateTimeDeserializer",
    value: function dateTimeDeserializer(key, value) {
      if (typeof value === 'string') {
        var a = new Date(value);

        if (!isNaN(a.valueOf())) {
          return a;
        }
      }

      return value;
    }
  }]);

  return HttpClient;
}();

exports.HttpClient = HttpClient;

/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _createForOfIteratorHelper = (__webpack_require__(269)["default"]);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function getProxyUrl(reqUrl) {
  var usingSsl = reqUrl.protocol === 'https:';
  var proxyUrl;

  if (checkBypass(reqUrl)) {
    return proxyUrl;
  }

  var proxyVar;

  if (usingSsl) {
    proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
  } else {
    proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
  }

  if (proxyVar) {
    proxyUrl = new URL(proxyVar);
  }

  return proxyUrl;
}

exports.getProxyUrl = getProxyUrl;

function checkBypass(reqUrl) {
  if (!reqUrl.hostname) {
    return false;
  }

  var noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';

  if (!noProxy) {
    return false;
  } // Determine the request port


  var reqPort;

  if (reqUrl.port) {
    reqPort = Number(reqUrl.port);
  } else if (reqUrl.protocol === 'http:') {
    reqPort = 80;
  } else if (reqUrl.protocol === 'https:') {
    reqPort = 443;
  } // Format the request hostname and hostname with port


  var upperReqHosts = [reqUrl.hostname.toUpperCase()];

  if (typeof reqPort === 'number') {
    upperReqHosts.push("".concat(upperReqHosts[0], ":").concat(reqPort));
  } // Compare request host against noproxy


  var _iterator = _createForOfIteratorHelper(noProxy.split(',').map(function (x) {
    return x.trim().toUpperCase();
  }).filter(function (x) {
    return x;
  })),
      _step;

  try {
    var _loop = function _loop() {
      var upperNoProxyItem = _step.value;

      if (upperReqHosts.some(function (x) {
        return x === upperNoProxyItem;
      })) {
        return {
          v: true
        };
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (typeof _ret === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

exports.checkBypass = checkBypass;

/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

/**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */

/**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */

var fs = __webpack_require__(147);

var path = __webpack_require__(17);

var utils = __webpack_require__(810);

var scopeOptionWarned = false;
/** @type {string} */

var _VERSION_STRING = (__webpack_require__(558)/* .version */ .i8);

var _DEFAULT_OPEN_DELIMITER = '<';
var _DEFAULT_CLOSE_DELIMITER = '>';
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS_PASSABLE_WITH_DATA = ['delimiter', 'scope', 'context', 'debug', 'compileDebug', 'client', '_with', 'rmWhitespace', 'strict', 'filename', 'async']; // We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`

var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat('cache');

var _BOM = /^\uFEFF/;
/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */

exports.cache = utils.cache;
/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */

exports.fileLoader = fs.readFileSync;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */

exports.localsName = _DEFAULT_LOCALS_NAME;
/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {PromiseConstructorLike}
 * @public
 */

exports.promiseImpl = new Function('return this;')().Promise;
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} [isDir=false] whether the parent file path is a directory
 * @return {String}
 */

exports.resolveInclude = function (name, filename, isDir) {
  var dirname = path.dirname;
  var extname = path.extname;
  var resolve = path.resolve;
  var includePath = resolve(isDir ? filename : dirname(filename), name);
  var ext = extname(name);

  if (!ext) {
    includePath += '.ejs';
  }

  return includePath;
};
/**
 * Try to resolve file path on multiple directories
 *
 * @param  {String}        name  specified path
 * @param  {Array<String>} paths list of possible parent directory paths
 * @return {String}
 */


function resolvePaths(name, paths) {
  var filePath;

  if (paths.some(function (v) {
    filePath = exports.resolveInclude(name, v, true);
    return fs.existsSync(filePath);
  })) {
    return filePath;
  }
}
/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */


function getIncludePath(path, options) {
  var includePath;
  var filePath;
  var views = options.views;
  var match = /^[A-Za-z]+:\\|^\//.exec(path); // Abs path

  if (match && match.length) {
    path = path.replace(/^\/*/, '');

    if (Array.isArray(options.root)) {
      includePath = resolvePaths(path, options.root);
    } else {
      includePath = exports.resolveInclude(path, options.root || '/', true);
    }
  } // Relative paths
  else {
    // Look relative to a passed filename first
    if (options.filename) {
      filePath = exports.resolveInclude(path, options.filename);

      if (fs.existsSync(filePath)) {
        includePath = filePath;
      }
    } // Then look in any views directories


    if (!includePath && Array.isArray(views)) {
      includePath = resolvePaths(path, views);
    }

    if (!includePath && typeof options.includer !== 'function') {
      throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
    }
  }

  return includePath;
}
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */


function handleCache(options, template) {
  var func;
  var filename = options.filename;
  var hasTemplate = arguments.length > 1;

  if (options.cache) {
    if (!filename) {
      throw new Error('cache option requires a filename');
    }

    func = exports.cache.get(filename);

    if (func) {
      return func;
    }

    if (!hasTemplate) {
      template = fileLoader(filename).toString().replace(_BOM, '');
    }
  } else if (!hasTemplate) {
    // istanbul ignore if: should not happen at all
    if (!filename) {
      throw new Error('Internal EJS error: no file name or template ' + 'provided');
    }

    template = fileLoader(filename).toString().replace(_BOM, '');
  }

  func = exports.compile(template, options);

  if (options.cache) {
    exports.cache.set(filename, func);
  }

  return func;
}
/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */


function tryHandleCache(options, data, cb) {
  var result;

  if (!cb) {
    if (typeof exports.promiseImpl == 'function') {
      return new exports.promiseImpl(function (resolve, reject) {
        try {
          result = handleCache(options)(data);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      });
    } else {
      throw new Error('Please provide a callback function');
    }
  } else {
    try {
      result = handleCache(options)(data);
    } catch (err) {
      return cb(err);
    }

    cb(null, result);
  }
}
/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */


function fileLoader(filePath) {
  return exports.fileLoader(filePath);
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */


function includeFile(path, options) {
  var opts = utils.shallowCopy({}, options);
  opts.filename = getIncludePath(path, opts);

  if (typeof options.includer === 'function') {
    var includerResult = options.includer(path, opts.filename);

    if (includerResult) {
      if (includerResult.filename) {
        opts.filename = includerResult.filename;
      }

      if (includerResult.template) {
        return handleCache(opts, includerResult.template);
      }
    }
  }

  return handleCache(opts);
}
/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements {RethrowCallback}
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} flnm     file name of the EJS file
 * @param {Number} lineno   line number of the error
 * @param {EscapeCallback} esc
 * @static
 */


function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm); // Error context

  var context = lines.slice(start, end).map(function (line, i) {
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ') + curr + '| ' + line;
  }).join('\n'); // Alter exception message

  err.path = filename;
  err.message = (filename || 'ejs') + ':' + lineno + '\n' + context + '\n\n' + err.message;
  throw err;
}

function stripSemi(str) {
  return str.replace(/;(\s*$)/, '$1');
}
/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} [opts] compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */


exports.compile = function compile(template, opts) {
  var templ; // v1 compat
  // 'scope' is 'context'
  // FIXME: Remove this in a future version

  if (opts && opts.scope) {
    if (!scopeOptionWarned) {
      console.warn('`scope` option is deprecated and will be removed in EJS 3');
      scopeOptionWarned = true;
    }

    if (!opts.context) {
      opts.context = opts.scope;
    }

    delete opts.scope;
  }

  templ = new Template(template, opts);
  return templ.compile();
};
/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */


exports.render = function (template, d, o) {
  var data = d || {};
  var opts = o || {}; // No options object -- if there are optiony names
  // in the data, copy them to options

  if (arguments.length == 2) {
    utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
  }

  return handleCache(opts, template)(data);
};
/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */


exports.renderFile = function () {
  var args = Array.prototype.slice.call(arguments);
  var filename = args.shift();
  var cb;
  var opts = {
    filename: filename
  };
  var data;
  var viewOpts; // Do we have a callback?

  if (typeof arguments[arguments.length - 1] == 'function') {
    cb = args.pop();
  } // Do we have data/opts?


  if (args.length) {
    // Should always have data obj
    data = args.shift(); // Normal passed opts (data obj + opts obj)

    if (args.length) {
      // Use shallowCopy so we don't pollute passed in opts obj with new vals
      utils.shallowCopy(opts, args.pop());
    } // Special casing for Express (settings + opts-in-data)
    else {
      // Express 3 and 4
      if (data.settings) {
        // Pull a few things from known locations
        if (data.settings.views) {
          opts.views = data.settings.views;
        }

        if (data.settings['view cache']) {
          opts.cache = true;
        } // Undocumented after Express 2, but still usable, esp. for
        // items that are unsafe to be passed along with data, like `root`


        viewOpts = data.settings['view options'];

        if (viewOpts) {
          utils.shallowCopy(opts, viewOpts);
        }
      } // Express 2 and lower, values set in app.locals, or people who just
      // want to pass options in their data. NOTE: These values will override
      // anything previously set in settings  or settings['view options']


      utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
    }

    opts.filename = filename;
  } else {
    data = {};
  }

  return tryHandleCache(opts, data, cb);
};
/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */

/**
 * EJS template class
 * @public
 */


exports.Template = Template;

exports.clearCache = function () {
  exports.cache.reset();
};

function Template(text, opts) {
  opts = opts || {};
  var options = {};
  this.templateText = text;
  /** @type {string | null} */

  this.mode = null;
  this.truncate = false;
  this.currentLine = 1;
  this.source = '';
  options.client = opts.client || false;
  options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
  options.compileDebug = opts.compileDebug !== false;
  options.debug = !!opts.debug;
  options.filename = opts.filename;
  options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
  options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
  options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
  options.strict = opts.strict || false;
  options.context = opts.context;
  options.cache = opts.cache || false;
  options.rmWhitespace = opts.rmWhitespace;
  options.root = opts.root;
  options.includer = opts.includer;
  options.outputFunctionName = opts.outputFunctionName;
  options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
  options.views = opts.views;
  options.async = opts.async;
  options.destructuredLocals = opts.destructuredLocals;
  options.legacyInclude = typeof opts.legacyInclude != 'undefined' ? !!opts.legacyInclude : true;

  if (options.strict) {
    options._with = false;
  } else {
    options._with = typeof opts._with != 'undefined' ? opts._with : true;
  }

  this.opts = options;
  this.regex = this.createRegex();
}

Template.modes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal'
};
Template.prototype = {
  createRegex: function createRegex() {
    var str = _REGEX_STRING;
    var delim = utils.escapeRegExpChars(this.opts.delimiter);
    var open = utils.escapeRegExpChars(this.opts.openDelimiter);
    var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
    str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
    return new RegExp(str);
  },
  compile: function compile() {
    /** @type {string} */
    var src;
    /** @type {ClientFunction} */

    var fn;
    var opts = this.opts;
    var prepended = '';
    var appended = '';
    /** @type {EscapeCallback} */

    var escapeFn = opts.escapeFunction;
    /** @type {FunctionConstructor} */

    var ctor;
    /** @type {string} */

    var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : 'undefined';

    if (!this.source) {
      this.generateSource();
      prepended += '  var __output = "";\n' + '  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';

      if (opts.outputFunctionName) {
        prepended += '  var ' + opts.outputFunctionName + ' = __append;' + '\n';
      }

      if (opts.destructuredLocals && opts.destructuredLocals.length) {
        var destructuring = '  var __locals = (' + opts.localsName + ' || {}),\n';

        for (var i = 0; i < opts.destructuredLocals.length; i++) {
          var name = opts.destructuredLocals[i];

          if (i > 0) {
            destructuring += ',\n  ';
          }

          destructuring += name + ' = __locals.' + name;
        }

        prepended += destructuring + ';\n';
      }

      if (opts._with !== false) {
        prepended += '  with (' + opts.localsName + ' || {}) {' + '\n';
        appended += '  }' + '\n';
      }

      appended += '  return __output;' + '\n';
      this.source = prepended + this.source + appended;
    }

    if (opts.compileDebug) {
      src = 'var __line = 1' + '\n' + '  , __lines = ' + JSON.stringify(this.templateText) + '\n' + '  , __filename = ' + sanitizedFilename + ';' + '\n' + 'try {' + '\n' + this.source + '} catch (e) {' + '\n' + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n' + '}' + '\n';
    } else {
      src = this.source;
    }

    if (opts.client) {
      src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;

      if (opts.compileDebug) {
        src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
      }
    }

    if (opts.strict) {
      src = '"use strict";\n' + src;
    }

    if (opts.debug) {
      console.log(src);
    }

    if (opts.compileDebug && opts.filename) {
      src = src + '\n' + '//# sourceURL=' + sanitizedFilename + '\n';
    }

    try {
      if (opts.async) {
        // Have to use generated function for this, since in envs without support,
        // it breaks in parsing
        try {
          ctor = new Function('return (async function(){}).constructor;')();
        } catch (e) {
          if (e instanceof SyntaxError) {
            throw new Error('This environment does not support async/await');
          } else {
            throw e;
          }
        }
      } else {
        ctor = Function;
      }

      fn = new ctor(opts.localsName + ', escapeFn, include, rethrow', src);
    } catch (e) {
      // istanbul ignore else
      if (e instanceof SyntaxError) {
        if (opts.filename) {
          e.message += ' in ' + opts.filename;
        }

        e.message += ' while compiling ejs\n\n';
        e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
        e.message += 'https://github.com/RyanZim/EJS-Lint';

        if (!opts.async) {
          e.message += '\n';
          e.message += 'Or, if you meant to create an async function, pass `async: true` as an option.';
        }
      }

      throw e;
    } // Return a callable function which will execute the function
    // created by the source-code, with the passed data as locals
    // Adds a local `include` function which allows full recursive include


    var returnedFn = opts.client ? fn : function anonymous(data) {
      var include = function include(path, includeData) {
        var d = utils.shallowCopy({}, data);

        if (includeData) {
          d = utils.shallowCopy(d, includeData);
        }

        return includeFile(path, opts)(d);
      };

      return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
    };

    if (opts.filename && typeof Object.defineProperty === 'function') {
      var filename = opts.filename;
      var basename = path.basename(filename, path.extname(filename));

      try {
        Object.defineProperty(returnedFn, 'name', {
          value: basename,
          writable: false,
          enumerable: false,
          configurable: true
        });
      } catch (e) {
        /* ignore */
      }
    }

    return returnedFn;
  },
  generateSource: function generateSource() {
    var opts = this.opts;

    if (opts.rmWhitespace) {
      // Have to use two separate replace here as `^` and `$` operators don't
      // work well with `\r` and empty lines don't work well with the `m` flag.
      this.templateText = this.templateText.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
    } // Slurp spaces and tabs before <%_ and after _%>


    this.templateText = this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');
    var self = this;
    var matches = this.parseTemplateText();
    var d = this.opts.delimiter;
    var o = this.opts.openDelimiter;
    var c = this.opts.closeDelimiter;

    if (matches && matches.length) {
      matches.forEach(function (line, index) {
        var closing; // If this is an opening tag, check for closing tags
        // FIXME: May end up with some false positives here
        // Better to store modes as k/v with openDelimiter + delimiter as key
        // Then this can simply check against the map

        if (line.indexOf(o + d) === 0 // If it is a tag
        && line.indexOf(o + d + d) !== 0) {
          // and is not escaped
          closing = matches[index + 2];

          if (!(closing == d + c || closing == '-' + d + c || closing == '_' + d + c)) {
            throw new Error('Could not find matching close tag for "' + line + '".');
          }
        }

        self.scanLine(line);
      });
    }
  },
  parseTemplateText: function parseTemplateText() {
    var str = this.templateText;
    var pat = this.regex;
    var result = pat.exec(str);
    var arr = [];
    var firstPos;

    while (result) {
      firstPos = result.index;

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos));
        str = str.slice(firstPos);
      }

      arr.push(result[0]);
      str = str.slice(result[0].length);
      result = pat.exec(str);
    }

    if (str) {
      arr.push(str);
    }

    return arr;
  },
  _addOutput: function _addOutput(line) {
    if (this.truncate) {
      // Only replace single leading linebreak in the line after
      // -%> tag -- this is the single, trailing linebreak
      // after the tag that the truncation mode replaces
      // Handle Win / Unix / old Mac linebreaks -- do the \r\n
      // combo first in the regex-or
      line = line.replace(/^(?:\r\n|\r|\n)/, '');
      this.truncate = false;
    }

    if (!line) {
      return line;
    } // Preserve literal slashes


    line = line.replace(/\\/g, '\\\\'); // Convert linebreaks

    line = line.replace(/\n/g, '\\n');
    line = line.replace(/\r/g, '\\r'); // Escape double-quotes
    // - this will be the delimiter during execution

    line = line.replace(/"/g, '\\"');
    this.source += '    ; __append("' + line + '")' + '\n';
  },
  scanLine: function scanLine(line) {
    var self = this;
    var d = this.opts.delimiter;
    var o = this.opts.openDelimiter;
    var c = this.opts.closeDelimiter;
    var newLineCount = 0;
    newLineCount = line.split('\n').length - 1;

    switch (line) {
      case o + d:
      case o + d + '_':
        this.mode = Template.modes.EVAL;
        break;

      case o + d + '=':
        this.mode = Template.modes.ESCAPED;
        break;

      case o + d + '-':
        this.mode = Template.modes.RAW;
        break;

      case o + d + '#':
        this.mode = Template.modes.COMMENT;
        break;

      case o + d + d:
        this.mode = Template.modes.LITERAL;
        this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + '\n';
        break;

      case d + d + c:
        this.mode = Template.modes.LITERAL;
        this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + '\n';
        break;

      case d + c:
      case '-' + d + c:
      case '_' + d + c:
        if (this.mode == Template.modes.LITERAL) {
          this._addOutput(line);
        }

        this.mode = null;
        this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
        break;

      default:
        // In script mode, depends on type of tag
        if (this.mode) {
          // If '//' is found without a line break, add a line break.
          switch (this.mode) {
            case Template.modes.EVAL:
            case Template.modes.ESCAPED:
            case Template.modes.RAW:
              if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
                line += '\n';
              }

          }

          switch (this.mode) {
            // Just executing code
            case Template.modes.EVAL:
              this.source += '    ; ' + line + '\n';
              break;
            // Exec, esc, and output

            case Template.modes.ESCAPED:
              this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
              break;
            // Exec and output

            case Template.modes.RAW:
              this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
              break;

            case Template.modes.COMMENT:
              // Do nothing
              break;
            // Literal <%% mode, append as raw output

            case Template.modes.LITERAL:
              this._addOutput(line);

              break;
          }
        } // In string mode, just add the output
        else {
          this._addOutput(line);
        }

    }

    if (self.opts.compileDebug && newLineCount) {
      this.currentLine += newLineCount;
      this.source += '    ; __line = ' + this.currentLine + '\n';
    }
  }
};
/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */

exports.escapeXML = utils.escapeXML;
/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */

exports.__express = exports.renderFile;
/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.VERSION = _VERSION_STRING;
/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.name = _NAME;
/* istanbul ignore if */

if (typeof window != 'undefined') {
  window.ejs = exports;
}

/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * Private utility functions
 * @module utils
 * @private
 */


var regExpChars = /[|\\{}()[\]^$+*?.]/g;
/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeRegExpChars = function (string) {
  // istanbul ignore if
  if (!string) {
    return '';
  }

  return String(string).replace(regExpChars, '\\$&');
};

var _ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
var _MATCH_HTML = /[&<>'"]/g;

function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}
/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */


var escapeFuncStr = 'var _ENCODE_HTML_RULES = {\n' + '      "&": "&amp;"\n' + '    , "<": "&lt;"\n' + '    , ">": "&gt;"\n' + '    , \'"\': "&#34;"\n' + '    , "\'": "&#39;"\n' + '    }\n' + '  , _MATCH_HTML = /[&<>\'"]/g;\n' + 'function encode_char(c) {\n' + '  return _ENCODE_HTML_RULES[c] || c;\n' + '};\n';
/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeXML = function (markup) {
  return markup == undefined ? '' : String(markup).replace(_MATCH_HTML, encode_char);
};

exports.escapeXML.toString = function () {
  return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};
/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */


exports.shallowCopy = function (to, from) {
  from = from || {};

  for (var p in from) {
    to[p] = from[p];
  }

  return to;
};
/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */


exports.shallowCopyFromList = function (to, from, list) {
  for (var i = 0; i < list.length; i++) {
    var p = list[i];

    if (typeof from[p] != 'undefined') {
      to[p] = from[p];
    }
  }

  return to;
};
/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements {Cache}
 * @static
 * @private
 */


exports.cache = {
  _data: {},
  set: function set(key, val) {
    this._data[key] = val;
  },
  get: function get(key) {
    return this._data[key];
  },
  remove: function remove(key) {
    delete this._data[key];
  },
  reset: function reset() {
    this._data = {};
  }
};
/**
 * Transforms hyphen case variable into camel case.
 *
 * @param {String} string Hyphen case string
 * @return {String} Camel case string
 * @static
 * @private
 */

exports.hyphenToCamel = function (str) {
  return str.replace(/-[a-z]/g, function (match) {
    return match[1].toUpperCase();
  });
};

/***/ }),

/***/ 961:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : 0);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(938);

/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var net = __webpack_require__(982);

var tls = __webpack_require__(404);

var http = __webpack_require__(685);

var https = __webpack_require__(687);

var events = __webpack_require__(361);

var assert = __webpack_require__(491);

var util = __webpack_require__(837);

exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;

function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];
  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);

    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];

      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }

    socket.destroy();
    self.removeSocket(socket);
  });
}

util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({
    request: req
  }, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  } // If we are under maxSockets create a new one.


  self.createSocket(options, function (socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);
  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });

  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }

  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6

  connectReq.once('response', onResponse); // for v0.6

  connectReq.once('upgrade', onUpgrade); // for v0.6

  connectReq.once('connect', onConnect); // for v0.7 or later

  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function () {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d', res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' + 'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }

    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();
    debug('tunneling socket could not be established, cause=%s\n', cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' + 'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket);

  if (pos === -1) {
    return;
  }

  this.sockets.splice(pos, 1);
  var pending = this.requests.shift();

  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function (socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function (socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    }); // 0 is dummy port for v0.6

    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}

function toOptions(host, port, localAddress) {
  if (typeof host === 'string') {
    // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }

  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];

    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);

      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];

        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }

  return target;
}

var debug;

if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function debug() {
    var args = Array.prototype.slice.call(arguments);

    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }

    console.error.apply(console, args);
  };
} else {
  debug = function debug() {};
}

exports.debug = debug; // for test

/***/ }),

/***/ 491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 558:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"3.1.6"};

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
var core = __webpack_require__(397);
// EXTERNAL MODULE: ./node_modules/ejs/lib/ejs.js
var ejs = __webpack_require__(129);
;// CONCATENATED MODULE: ./src/main.ts
try{;_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var token,template,vars,options,output;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:token=(0,core.getInput)('token');template=(0,core.getInput)('template');vars=(0,core.getInput)('vars');options=(0,core.getInput)('options');output=(0,core.getInput)('output');case 5:case"end":return _context.stop();}}},_callee);}))();}catch(error){(0,core.setFailed)(error.message);}
})();

module.exports = __webpack_exports__;
/******/ })()
;