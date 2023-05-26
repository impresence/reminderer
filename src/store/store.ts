import { makeAutoObservable } from 'mobx'

interface ITodo {
    id: number,
    title: string,
    completed: boolean,
}
// newTodo сделать объектом
class Store {
    todos: ITodo[] = [
        {
        id: 1,
        title: 'do homework' ,
        completed: false,
        },
        {
            id: 2,
            title: 'do dance' ,
            completed: false,
        },
        {
            id: 3,
            title: 'do shit' ,
            completed: false,
        }
    ]
    newTodo: ITodo = {
        id: Math.round(Math.random()*1000),
        title: '',
        completed: false,
    }
    setNewTodoTitle(e: React.ChangeEvent<HTMLInputElement>): void {                     // написать тип
        this.newTodo.title = e.target.value
        console.log(this.newTodo.title)
    }

    addTodo():void {
        this.todos.push(this.newTodo)
        console.log(this.todos)
    }
    
    // removeTodo() {
    //     this.todos.pop()
    //     console.log(this.todos)
    // }

    constructor() {
        makeAutoObservable(this)
    }
}

export const store = new Store()