import { makeAutoObservable, reaction } from 'mobx'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    description: string,
    date: Date,
    day: string,
    color: string,
}

export class Store {
    todos: ITodo[] = []
    newTodoTitle: string = ''
    newTodoDesc: string = ''
    newTodoDate: any = new Date()
    newTodoDay: string = ''
    newTodoColor: string = '#DCDCDC'
    
    dateData = {
      GetHours() {return store.newTodoDate.getHours()},
      GetMinutes() {return store.newTodoDate.getMinutes()},
      GetD() {return store.newTodoDate.getDate()},
      GetM() {return store.newTodoDate.getMonth()},
      GetY() {return store.newTodoDate.getFullYear()},
    }


    setNewTodoTitle(e: React.ChangeEvent<HTMLInputElement>): void {
        this.newTodoTitle = e.target.value
    }
    setNewTodoDesc(e: React.ChangeEvent<HTMLTextAreaElement>):void {
        this.newTodoDesc = e.target.value
    }
    setNewTodoDate(e: React.ChangeEvent<HTMLInputElement>):void {
        this.newTodoDate = new Date(e.target.value);
        this.getDayOfWeek();
        console.log(this.newTodoDate);
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
                color: this.newTodoColor,
            }
            this.todos.push(newTodo)
            this.newTodoTitle = ''
            this.newTodoDesc = ''
            this.newTodoDate = new Date()
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
        this.todos = this.todos.map(todo => {
          todo.date = new Date(todo.date)
          return todo
        })
    }
}

export const store = new Store()