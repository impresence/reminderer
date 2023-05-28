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
exports.__esModule = true;
exports.store = exports.Store = void 0;
var mobx_1 = require("mobx");
var Store = /** @class */ (function () {
    function Store() {
        this.todos = [];
        this.newTodoTitle = '';
        this.newTodoDesc = '';
        this.newTodoDate = '';
        this.newTodoColor = '';
        mobx_1.makeAutoObservable(this);
    }
    Store.prototype.setNewTodoTitle = function (e) {
        this.newTodoTitle = e.target.value;
    };
    Store.prototype.setNewTodoDesc = function (e) {
        this.newTodoDesc = e.target.value;
    };
    Store.prototype.setNewTodoDate = function (e) {
        this.newTodoDate = e.target.value;
    };
    Store.prototype.setNewTodoColor = function (e) {
        this.newTodoColor = e.target.value;
    };
    Store.prototype.addTodo = function () {
        var newTodo = {
            id: Math.round(Math.random() * 1000),
            title: this.newTodoTitle,
            completed: false,
            description: this.newTodoDesc,
            date: this.newTodoDate,
            color: this.newTodoColor
        };
        this.todos.push(newTodo);
        this.newTodoTitle = '';
        console.log(__assign({}, this.todos));
    };
    Store.prototype.deleteTodo = function (todo) {
        this.todos = this.todos.filter(function (t) { return todo.id != t.id; });
        console.log(this.todos);
    };
    return Store;
}());
exports.Store = Store;
exports.store = new Store();
