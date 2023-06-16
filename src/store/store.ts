import { makeAutoObservable, reaction } from 'mobx'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    description: string,
    date: string,
    day: string,
    color: string
}

export class Store {
    todos: ITodo[] = []
    newTodoTitle: string = ''
    newTodoDesc: string = ''
    newTodoDate: string = ''
    newTodoDay: string = ''
    newTodoColor: string = '#DCDCDC'


    setNewTodoTitle(e: React.ChangeEvent<HTMLInputElement>): void {
        this.newTodoTitle = e.target.value
    }
    setNewTodoDesc(e: React.ChangeEvent<HTMLTextAreaElement>):void {
        this.newTodoDesc = e.target.value
    }
    setNewTodoDate(e: React.ChangeEvent<HTMLInputElement>):void {
        this.newTodoDate = e.target.value
        this.getDayOfWeek()
    }
    setNewTodoColor(e: React.ChangeEvent<HTMLSelectElement>):void {
        this.newTodoColor = e.target.value
    }

    addTodo() {
        if (this.newTodoTitle.trim().length > 0 || this.newTodoDate) {            
            const newTodo: ITodo = {
                id: Math.round(Math.random() * 1000),
                title: this.newTodoTitle.trim(),
                completed: false,
                description: this.newTodoDesc,
                date: this.newTodoDate,
                day: this.newTodoDay,
                color: this.newTodoColor
            }
            this.todos.push(newTodo)
            this.newTodoTitle = ''
            this.newTodoDesc = ''
            this.newTodoDate = ''
            this.newTodoColor = '#BBC6FF'
            this.saveToLS()
        }
    }

    getDayOfWeek = () => {
        const d = new Date(store.newTodoDate) 
        const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.newTodoDay = week[d.getDay()]
    }
    
    deleteTodo(todo: ITodo) {
        this.todos = this.todos.filter((t) => todo.id != t.id)
        console.log(this.todos)
    }

    saveToLS = () => {
      localStorage.setItem('todos',JSON.stringify(this.todos))
    }

    constructor() {
        makeAutoObservable(this)

        reaction(() => this.todos, this.saveToLS)
        const todos = localStorage.getItem('todos')
        this.todos = todos ? JSON.parse(todos) : []
    }
}

export const store = new Store()