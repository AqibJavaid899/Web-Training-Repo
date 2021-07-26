"use strict";
exports.__esModule = true;
exports.getNames = exports.restParams = exports.promiseFunc = exports.format = exports.concatStrings = void 0;
// Passing Number type as arguments and returning Number type as the return value
var addNumbers = function (a, b) {
    return a + b;
};
// Passing String type as arguments with default params and returning String type as the return value
var concatStrings = function (s1, s2) {
    if (s2 === void 0) { s2 = 'default'; }
    return s1 + " " + s2;
};
exports.concatStrings = concatStrings;
// Passing Union type as arguments and returning String type as the return value
var utilityFormat = function (str, params) {
    return "String : " + str + ", Params: " + params;
};
// Passing Union type as arguments and returning Void type as the return value
var format = function (str, params) {
    console.log(utilityFormat(str, params));
};
exports.format = format;
// Passing String as an argument type and returning Promise type as a return value
var promiseFunc = function (url) {
    return Promise.resolve("Fetching Data from " + url);
};
exports.promiseFunc = promiseFunc;
// Passing REST parameter as an argument type and returning String type as a return type
var restParams = function (name) {
    var hobbies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobbies[_i - 1] = arguments[_i];
    }
    return "Name is : " + name + ". Hobbies are : " + hobbies.join(' ');
};
exports.restParams = restParams;
// Passing object as an argument type and returning String type as a return type
var getNames = function (user) {
    var _a, _b;
    return "Name of User is : " + ((_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : 'firstName') + " " + ((_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : 'lastName');
};
exports.getNames = getNames;
exports["default"] = addNumbers;
