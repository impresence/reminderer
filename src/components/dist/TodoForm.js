"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var store_1 = require("../store/store");
var react_router_dom_1 = require("react-router-dom");
var TodoForm = function () {
    var isValid = store_1.store.newTodoTitle.length >= 2 && store_1.store.newTodoDesc.length >= 2 && store_1.store.newTodoDate.length >= 0;
    var handleAdd = function () {
        if (isValid) {
            store_1.store.addTodo();
        }
    };
    return (react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
        react_1["default"].createElement("div", { className: ' text-white w-10/12 h-56 my-8 rounded-3xl border', style: { backgroundColor: store_1.store.newTodoColor } },
            react_1["default"].createElement("h1", { className: 'm-8 text-5xl font-bold' }, store_1.store.newTodoTitle),
            react_1["default"].createElement("p", { className: 'm-8 text-3xl overflow-clip' }, store_1.store.newTodoDesc),
            react_1["default"].createElement("h2", { className: ' m-8 text-right' },
                react_1["default"].createElement("span", { className: 'font-bold mx-3' }, store_1.store.newTodoDay),
                store_1.store.newTodoDate)),
        react_1["default"].createElement("div", { className: 'w-10/12 grid grid-cols-3 my-6 gap-7' },
            react_1["default"].createElement("input", { name: 'title', className: 'border text-xl m-1 rounded-lg h-16 p-1', value: store_1.store.newTodoTitle, onChange: function (e) { return store_1.store.setNewTodoTitle(e); }, placeholder: 'Title', maxLength: 40, type: "text" }),
            react_1["default"].createElement("textarea", { name: 'description', className: ' text-xl border m-1 row-span-2 rounded-lg p-1 overflow-auto resize-none', value: store_1.store.newTodoDesc, onChange: function (e) { return store_1.store.setNewTodoDesc(e); }, placeholder: 'Description', maxLength: 100 }),
            react_1["default"].createElement("select", { className: ' m-1 rounded-lg h-16 p-1 border', style: { backgroundColor: store_1.store.newTodoColor }, onChange: function (e) { return store_1.store.setNewTodoColor(e); } },
                react_1["default"].createElement("option", { value: "#DCDCDC" }, "--Choose color--"),
                react_1["default"].createElement("option", { value: '#BBC6FF', className: ' bg-[#BBC6FF]' }, "Lavender"),
                react_1["default"].createElement("option", { value: '#AADFFD', className: ' bg-[#AADFFD]' }, "Light Blue"),
                react_1["default"].createElement("option", { value: '#E1BBFF', className: ' bg-[#E1BBFF]' }, "Pink"),
                react_1["default"].createElement("option", { value: '#A6EEA9', className: ' bg-[#A6EEA9]' }, "Lime"),
                react_1["default"].createElement("option", { value: '#F5D88D', className: ' bg-[#F5D88D]' }, "Yellow")),
            react_1["default"].createElement("input", { name: 'date', className: 'border m-1 rounded-lg h-16 p-1', onChange: function (e) { return store_1.store.setNewTodoDate(e); }, type: "date" })),
        store_1.store.newTodoTitle.length < 2 ? react_1["default"].createElement("div", null, "Title min length is 2 symbols") : react_1["default"].createElement("div", null, " "),
        store_1.store.newTodoDesc.length < 2 && react_1["default"].createElement("div", null, "Description min length is 2 symbols"),
        store_1.store.newTodoDate.length < 2 && react_1["default"].createElement("div", null, "Choose date for reminding"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: '/list' },
            react_1["default"].createElement("button", { disabled: store_1.store.newTodoTitle.length < 2 ? true : false, style: { backgroundColor: isValid ? '' : 'grey' }, onClick: handleAdd, className: 'mt-8 text-white bg-theme-blue px-20 py-3 font-semibold rounded-xl' }, "Create"))));
};
exports["default"] = mobx_react_lite_1.observer(TodoForm);
