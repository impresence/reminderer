"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mainBg_png_1 = require("../assets/mainBg.png");
var react_router_dom_1 = require("react-router-dom");
var Main = function () {
    return (react_1["default"].createElement("div", { style: { background: "url(" + mainBg_png_1["default"] + ")", backgroundSize: 'cover' }, className: 'flex justify-center bg-theme-blue w-screen h-screen overflow-hidden' },
        react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center relative top-[58%] sm:top-auto w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8' },
            react_1["default"].createElement("h1", { className: 'mt-8 text-5xl font-bold text-white text-center' }, "Reminderer"),
            react_1["default"].createElement("h2", { className: 'mt-4 text-lg font-bold text-white text-center max-w-2xl' }, "Simple To-Do List that reminds with Telegram message"),
            react_1["default"].createElement(react_router_dom_1.Link, { to: '/create' },
                react_1["default"].createElement("button", { className: 'mt-8 text-lg text-theme-blue bg-white px-10 py-3 font-semibold rounded-xl hover:text-white hover:bg-btn-blue-hover transition ease-in-out' }, "Get Started")))));
};
exports["default"] = Main;
