import { makeAutoObservable } from 'mobx'

interface ITodo {
    id: number,
    title: string,
    completed: boolean,
}

class Store {
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

    constructor() {
        makeAutoObservable(this)
    }
}

export const store = new Store()