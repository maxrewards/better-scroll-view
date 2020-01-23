"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var renderer = function (_a) {
    var item = _a.item;
    return item;
};
var BetterScrollView = function (_a) {
    var data = _a.data, onScroll = _a.onScroll, scrollViewRef = _a.scrollViewRef, listKey = _a.listKey, props = __rest(_a, ["data", "onScroll", "scrollViewRef", "listKey"]);
    if (props.children && Array.isArray(props.children) && !data)
        data = __spreadArrays(props.children);
    else if (props.children && !Array.isArray(props.children) && !data)
        data = [props.children];
    return (React.createElement(react_native_1.FlatList, __assign({ ref: scrollViewRef, data: data, renderItem: renderer, onScroll: onScroll, scrollEventThrottle: onScroll && 16, showsVerticalScrollIndicator: false, listKey: listKey, keyExtractor: function (item, index) { return index.toString(); } }, props)));
};
exports.default = BetterScrollView;
//# sourceMappingURL=BetterScrollView.js.map