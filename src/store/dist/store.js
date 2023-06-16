"use strict";
exports.__esModule = true;
exports.store = exports.Store = void 0;
var mobx_1 = require("mobx");
var Store = /** @class */ (function () {
    function Store() {
        var _this = this;
        this.todos = [];
        this.newTodoTitle = '';
        this.newTodoDesc = '';
        this.newTodoDate = '';
        this.newTodoDay = '';
        this.newTodoColor = '#DCDCDC';
        this.getDayOfWeek = function () {
            var d = new Date(exports.store.newTodoDate);
            var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            _this.newTodoDay = week[d.getDay()];
        };
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
        this.getDayOfWeek();
    };
    Store.prototype.setNewTodoColor = function (e) {
        this.newTodoColor = e.target.value;
    };
    Store.prototype.addTodo = function () {
        if (this.newTodoTitle.trim().length > 0 || this.newTodoDate) {
            var newTodo = {
                id: Math.round(Math.random() * 1000),
                title: this.newTodoTitle.trim(),
                completed: false,
                description: this.newTodoDesc,
                date: this.newTodoDate,
                day: this.newTodoDay,
                color: this.newTodoColor
            };
            this.todos.push(newTodo);
            this.newTodoTitle = '';
            this.newTodoDesc = '';
            this.newTodoDate = '';
            this.newTodoColor = '#BBC6FF';
        }
    };
    Store.prototype.deleteTodo = function (todo) {
        this.todos = this.todos.filter(function (t) { return todo.id != t.id; });
        console.log(this.todos);
    };
    return Store;
}());
exports.Store = Store;
exports.store = new Store();
