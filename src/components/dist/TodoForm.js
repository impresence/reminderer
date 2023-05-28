"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var store_1 = require("../store/store");
var TodoForm = function () {
    var handleAdd = function () {
        if (store_1.store.newTodoTitle.length > 0) {
            store_1.store.addTodo();
        }
    };
    var getDayOfWeek = function () {
        var d = new Date(store_1.store.newTodoDate);
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return week[d.getDay()];
    };
    var setColor = function (e) {
        var color = e.target.value;
        store_1.store.setNewTodoColor(color);
    };
    return (react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
        react_1["default"].createElement("div", { className: ' text-white w-10/12 h-56 my-8 rounded-3xl bg-[#BBC6FF]' },
            react_1["default"].createElement("h1", { className: 'm-8 text-5xl font-bold' }, store_1.store.newTodoTitle),
            react_1["default"].createElement("p", { className: 'm-8 text-3xl overflow-clip' }, store_1.store.newTodoDesc),
            react_1["default"].createElement("h2", { className: ' m-8 text-right' },
                react_1["default"].createElement("span", { className: 'font-bold mx-3' }, getDayOfWeek()),
                store_1.store.newTodoDate)),
        react_1["default"].createElement("div", { className: 'w-10/12 grid grid-cols-3 my-6 gap-7' },
            react_1["default"].createElement("input", { className: 'border text-xl m-1 rounded-lg h-16 p-1', value: store_1.store.newTodoTitle, onChange: function (e) { return store_1.store.setNewTodoTitle(e); }, placeholder: 'Title', maxLength: 40, type: "text" }),
            react_1["default"].createElement("textarea", { className: ' text-xl border m-1 row-span-2 rounded-lg p-1 overflow-auto', onChange: function (e) { return store_1.store.setNewTodoDesc(e); }, placeholder: 'Description', maxLength: 100 }),
            react_1["default"].createElement("select", { className: 'border m-1 rounded-lg h-16 p-1', onChange: setColor },
                react_1["default"].createElement("option", { value: '#BBC6FF', className: ' bg-[#BBC6FF]' }),
                react_1["default"].createElement("option", { value: '#AADFFD', className: ' bg-[#AADFFD]' }),
                react_1["default"].createElement("option", { value: '#E1BBFF', className: ' bg-[#E1BBFF]' })),
            react_1["default"].createElement("input", { className: 'border m-1 rounded-lg h-16 p-1', onChange: function (e) { return store_1.store.setNewTodoDate(e); }, type: "date" })),
        react_1["default"].createElement("input", { className: 'border', value: store_1.store.newTodoTitle, onChange: function (e) { return store_1.store.setNewTodoTitle(e); }, type: "text" }),
        react_1["default"].createElement("button", { onClick: handleAdd }, "add todo")));
};
exports["default"] = mobx_react_lite_1.observer(TodoForm);
