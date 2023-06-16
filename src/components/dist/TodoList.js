"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var store_1 = require("../store/store");
var react_router_dom_1 = require("react-router-dom");
var TodoList = function () {
    var handleDelete = function (todo) {
        store_1.store.deleteTodo(todo);
    };
    return (react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/create' },
            react_1["default"].createElement("button", { className: 'mt-8 text-white bg-theme-blue px-20 py-3 font-semibold rounded-xl' }, "Create new")),
        store_1.store.todos.map(function (todo) { return (react_1["default"].createElement("div", { className: ' text-white w-10/12 h-56 my-8 rounded-3xl', style: { backgroundColor: todo.color } },
            react_1["default"].createElement("div", { className: 'flex' },
                react_1["default"].createElement("h1", { className: 'm-8 text-5xl font-bold' }, todo.title)),
            react_1["default"].createElement("p", { className: 'm-8 text-3xl overflow-clip' }, todo.description),
            react_1["default"].createElement("h2", { className: ' m-8 text-right' },
                react_1["default"].createElement("span", { className: 'font-bold mx-3' }, todo.day),
                todo.date))); })));
};
exports["default"] = mobx_react_lite_1.observer(TodoList);
