import { makeAutoObservable } from 'mobx'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    description: string,
    date: string,
    color: string
}

export class Store {
    todos: ITodo[] = []
    newTodoTitle: string = ''
    newTodoDesc: string = ''
    newTodoDate: string = ''
    newTodoColor: string = ''

    setNewTodoTitle(e: React.ChangeEvent<HTMLInputElement>): void {
        this.newTodoTitle = e.target.value
    }
    setNewTodoDesc(e: React.ChangeEvent<HTMLTextAreaElement>):void {
        this.newTodoDesc = e.target.value
    }
    setNewTodoDate(e: React.ChangeEvent<HTMLInputElement>):void {
        this.newTodoDate = e.target.value
    }
    setNewTodoColor(e: React.ChangeEvent<HTMLSelectElement>) {
        this.newTodoColor = e.target.value
    }

    addTodo() {
        const newTodo: ITodo = {
            id: Math.round(Math.random() * 1000),
            title: this.newTodoTitle,
            completed: false,
            description: this.newTodoDesc,
            date: this.newTodoDate,
            color: this.newTodoColor
        }
        this.todos.push(newTodo)
        this.newTodoTitle = ''
        console.log({...this.todos})
        
    }
    
    deleteTodo(todo: ITodo) {
        this.todos = this.todos.filter((t) => todo.id != t.id)
        console.log(this.todos)
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const store = new Store()