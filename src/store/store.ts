import { makeAutoObservable } from 'mobx'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
}

export class Store {
    todos: ITodo[] = []
    newTodoTitle: string = '';

    setNewTodoTitle(e: React.ChangeEvent<HTMLInputElement>): void {
        this.newTodoTitle = e.target.value
        console.log(this.newTodoTitle)
    }

    addTodo() {
        const newTodo: ITodo = {
            id: Math.round(Math.random() * 1000),
            title: this.newTodoTitle,
            completed: false,
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