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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst config = {\n  mongoUri: 'mongodb+srv://dbLuna:BGGbRXxPcveazsjb@cluster0.gzj6j.azure.mongodb.net/mernproject'\n};\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\config\\\\config.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./config/config.js?");

/***/ }),

/***/ "./devBundle.js":
/*!**********************!*\
  !*** ./devBundle.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../config/config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../webpack.config.client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst compile = app => {\n  if (Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../config/config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../webpack.config.client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../webpack.config.client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\devBundle.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./devBundle.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status('401').json({\n      error: \"User not found\"\n    });\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email,\n        educator: user.educator\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/course.controller.js":
/*!*************************************************!*\
  !*** ./server/controllers/course.controller.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_course_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/course.model */ \"./server/models/course.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_4__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../client/assets/images/default.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst create = (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_4___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n    let course = new _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    course.instructor = req.profile;\n    if (files.image) {\n      course.image.data = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(files.image.path);\n      course.image.contentType = files.image.type;\n    }\n    try {\n      let result = await course.save();\n      res.json(result);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\n\n/**\n * Load course and append to req.\n */\nconst courseByID = async (req, res, next, id) => {\n  try {\n    let course = await _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('instructor', '_id name');\n    if (!course) return res.status('400').json({\n      error: \"Course not found\"\n    });\n    req.course = course;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve course\"\n    });\n  }\n};\nconst read = (req, res) => {\n  req.course.image = undefined;\n  return res.json(req.course);\n};\nconst list = async (req, res) => {\n  try {\n    let courses = await _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n    res.json(courses);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst update = async (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_4___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n    let course = req.course;\n    course = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(course, fields);\n    if (fields.lessons) {\n      course.lessons = JSON.parse(fields.lessons);\n    }\n    course.updated = Date.now();\n    if (files.image) {\n      course.image.data = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(files.image.path);\n      course.image.contentType = files.image.type;\n    }\n    try {\n      await course.save();\n      res.json(course);\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\nconst newLesson = async (req, res) => {\n  try {\n    let lesson = req.body.lesson;\n    let result = await _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.course._id, {\n      $push: {\n        lessons: lesson\n      },\n      updated: Date.now()\n    }, {\n      new: true\n    }).populate('instructor', '_id name').exec();\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst remove = async (req, res) => {\n  try {\n    let course = req.course;\n    let deleteCourse = await course.remove();\n    res.json(deleteCourse);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst isInstructor = (req, res, next) => {\n  const isInstructor = req.course && req.auth && req.course.instructor._id == req.auth._id;\n  if (!isInstructor) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\nconst listByInstructor = (req, res) => {\n  _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n    instructor: req.profile._id\n  }, (err, courses) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(courses);\n  }).populate('instructor', '_id name');\n};\nconst listPublished = (req, res) => {\n  _models_course_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n    published: true\n  }, (err, courses) => {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n      });\n    }\n    res.json(courses);\n  }).populate('instructor', '_id name');\n};\nconst photo = (req, res, next) => {\n  if (req.course.image.data) {\n    res.set(\"Content-Type\", req.course.image.contentType);\n    return res.send(req.course.image.data);\n  }\n  next();\n};\nconst defaultPhoto = (req, res) => {\n  return res.sendFile(process.cwd() + Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../client/assets/images/default.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n};\nconst _default = {\n  create,\n  courseByID,\n  read,\n  list,\n  remove,\n  update,\n  isInstructor,\n  listByInstructor,\n  photo,\n  defaultPhoto,\n  newLesson,\n  listPublished\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(courseByID, \"courseByID\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(newLesson, \"newLesson\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(isInstructor, \"isInstructor\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(listByInstructor, \"listByInstructor\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(listPublished, \"listPublished\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\course.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/controllers/course.controller.js?");

/***/ }),

/***/ "./server/controllers/enrollment.controller.js":
/*!*****************************************************!*\
  !*** ./server/controllers/enrollment.controller.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/enrollment.model */ \"./server/models/enrollment.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst create = async (req, res) => {\n  let newEnrollment = {\n    course: req.course,\n    student: req.auth\n  };\n  newEnrollment.lessonStatus = req.course.lessons.map(lesson => {\n    return {\n      lesson: lesson,\n      complete: false\n    };\n  });\n  const enrollment = new _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newEnrollment);\n  try {\n    let result = await enrollment.save();\n    return res.status(200).json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n/**\n * Load enrollment and append to req.\n */\nconst enrollmentByID = async (req, res, next, id) => {\n  try {\n    let enrollment = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate({\n      path: 'course',\n      populate: {\n        path: 'instructor'\n      }\n    }).populate('student', '_id name');\n    if (!enrollment) return res.status('400').json({\n      error: \"Enrollment not found\"\n    });\n    req.enrollment = enrollment;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve enrollment\"\n    });\n  }\n};\nconst read = (req, res) => {\n  return res.json(req.enrollment);\n};\nconst complete = async (req, res) => {\n  let updatedData = {};\n  updatedData['lessonStatus.$.complete'] = req.body.complete;\n  updatedData.updated = Date.now();\n  if (req.body.courseCompleted) updatedData.completed = req.body.courseCompleted;\n  try {\n    let enrollment = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n      'lessonStatus._id': req.body.lessonStatusId\n    }, {\n      '$set': updatedData\n    });\n    res.json(enrollment);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst remove = async (req, res) => {\n  try {\n    let enrollment = req.enrollment;\n    let deletedEnrollment = await enrollment.remove();\n    res.json(deletedEnrollment);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst isStudent = (req, res, next) => {\n  const isStudent = req.auth && req.auth._id == req.enrollment.student._id;\n  if (!isStudent) {\n    return res.status('403').json({\n      error: \"User is not enrolled\"\n    });\n  }\n  next();\n};\nconst listEnrolled = async (req, res) => {\n  try {\n    let enrollments = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      student: req.auth._id\n    }).sort({\n      'completed': 1\n    }).populate('course', '_id name category');\n    res.json(enrollments);\n  } catch (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst findEnrollment = async (req, res, next) => {\n  try {\n    let enrollments = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      course: req.course._id,\n      student: req.auth._id\n    });\n    if (enrollments.length == 0) {\n      next();\n    } else {\n      res.json(enrollments[0]);\n    }\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst enrollmentStats = async (req, res) => {\n  try {\n    let stats = {};\n    stats.totalEnrolled = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      course: req.course._id\n    }).countDocuments();\n    stats.totalCompleted = await _models_enrollment_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      course: req.course._id\n    }).exists('completed', true).countDocuments();\n    res.json(stats);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst _default = {\n  create,\n  enrollmentByID,\n  read,\n  remove,\n  complete,\n  isStudent,\n  listEnrolled,\n  findEnrollment,\n  enrollmentStats\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(enrollmentByID, \"enrollmentByID\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(complete, \"complete\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(isStudent, \"isStudent\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(listEnrolled, \"listEnrolled\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(findEnrollment, \"findEnrollment\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(enrollmentStats, \"enrollmentStats\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\enrollment.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/controllers/enrollment.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst create = async (req, res) => {\n  const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\n/**\n * Load user and append to req.\n */\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status('400').json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\nconst list = async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\nconst isEducator = (req, res, next) => {\n  const isEducator = req.profile && req.profile.educator;\n  if (!isEducator) {\n    return res.status('403').json({\n      error: \"User is not an educator\"\n    });\n  }\n  next();\n};\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update,\n  isEducator\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(isEducator, \"isEducator\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/**\n * Get unique error field name\n */\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\nconst getUniqueErrorMessage = err => {\n  let output;\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n  return output;\n};\n\n/**\n * Get the error message from error object\n */\nconst getErrorMessage = err => {\n  let message = '';\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n  return message;\n};\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/course.model.js":
/*!***************************************!*\
  !*** ./server/models/course.model.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst LessonSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: String,\n  content: String,\n  resource_url: String\n});\nconst Lesson = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Lesson', LessonSchema);\nconst CourseSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  image: {\n    data: Buffer,\n    contentType: String\n  },\n  description: {\n    type: String,\n    trim: true\n  },\n  category: {\n    type: String,\n    required: 'Category is required'\n  },\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  instructor: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).ObjectId,\n    ref: 'User'\n  },\n  published: {\n    type: Boolean,\n    default: false\n  },\n  lessons: [LessonSchema]\n});\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Course', CourseSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(LessonSchema, \"LessonSchema\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\course.model.js\");\n  reactHotLoader.register(Lesson, \"Lesson\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\course.model.js\");\n  reactHotLoader.register(CourseSchema, \"CourseSchema\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\course.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\course.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/models/course.model.js?");

/***/ }),

/***/ "./server/models/enrollment.model.js":
/*!*******************************************!*\
  !*** ./server/models/enrollment.model.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst EnrollmentSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  course: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).ObjectId,\n    ref: 'Course'\n  },\n  updated: Date,\n  enrolled: {\n    type: Date,\n    default: Date.now\n  },\n  student: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).ObjectId,\n    ref: 'User'\n  },\n  lessonStatus: [{\n    lesson: {\n      type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).ObjectId,\n      ref: 'Lesson'\n    },\n    complete: Boolean\n  }],\n  completed: Date\n});\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Enrollment', EnrollmentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(EnrollmentSchema, \"EnrollmentSchema\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\enrollment.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\enrollment.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/models/enrollment.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  educator: {\n    type: Boolean,\n    default: false\n  }\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\models\\\\user.model.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/course.routes.js":
/*!****************************************!*\
  !*** ./server/routes/course.routes.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/course.controller */ \"./server/controllers/course.controller.js\");\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/courses/published').get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listPublished);\nrouter.route('/api/courses/by/:userId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isEducator, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create).get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hasAuthorization, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listByInstructor);\nrouter.route('/api/courses/photo/:courseId').get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photo, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultPhoto);\nrouter.route('/api/courses/defaultphoto').get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaultPhoto);\nrouter.route('/api/courses/:courseId/lesson/new').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isInstructor, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newLesson);\nrouter.route('/api/courses/:courseId').get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isInstructor, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isInstructor, _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('courseId', _controllers_course_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].courseByID);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\course.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\course.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/routes/course.routes.js?");

/***/ }),

/***/ "./server/routes/enrollment.routes.js":
/*!********************************************!*\
  !*** ./server/routes/enrollment.routes.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/enrollment.controller */ \"./server/controllers/enrollment.controller.js\");\n/* harmony import */ var _controllers_course_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/course.controller */ \"./server/controllers/course.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/enrollment/enrolled').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listEnrolled);\nrouter.route('/api/enrollment/new/:courseId').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findEnrollment, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/enrollment/stats/:courseId').get(_controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enrollmentStats);\nrouter.route('/api/enrollment/complete/:enrollmentId').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isStudent, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].complete);\nrouter.route('/api/enrollment/:enrollmentId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isStudent, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"].requireSignin, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isStudent, _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('courseId', _controllers_course_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].courseByID);\nrouter.param('enrollmentId', _controllers_enrollment_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].enrollmentByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\enrollment.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\enrollment.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/routes/enrollment.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\routes\\\\user.routes.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_course_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/course.routes */ \"./server/routes/course.routes.js\");\n/* harmony import */ var _routes_enrollment_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/enrollment.routes */ \"./server/routes/enrollment.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_14__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../client/MainRouter'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_17__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './../client/theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../devBundle */ \"./devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//TODO comment out before entering production\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n\n//TODO comment out before entering production\n_devBundle__WEBPACK_IMPORTED_MODULE_18__[\"default\"].compile(app);\n(mongoose__WEBPACK_IMPORTED_MODULE_8___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_8___default().connect(\"mongodb+srv://localhost/19000\", {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_8___default().connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_5___default()());\n// secure apps by setting various HTTP headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_7___default()());\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\n\n// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))\n\n// mount routes\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/', _routes_course_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.use('/', _routes_enrollment_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\napp.get('*', (req, res) => {\n  const sheets = new _mui_material__WEBPACK_IMPORTED_MODULE_17__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_14___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__.ThemeProvider, {\n    theme: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './../client/theme'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../client/MainRouter'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)))));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  const css = sheets.toString();\n  res.status(200).send(Template({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorized errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\napp.listen(port = 4000, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', port);\n});\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\server.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Capor\\\\Desktop\\\\repo\\\\zoom-yoga-classes\\\\server\\\\server.js\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://zoom-yoga-classes/./server/server.js?");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;