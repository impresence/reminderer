import { makeAutoObservable, reaction } from 'mobx'

export interface ITodo {
    id: number,
    title: string,
    completed: boolean,
    description: string,
    date: Date,
    day: string,
    color: string,
    // hrs: number,
    // mnts: number,
    // dateOfMonth: number,
    // month: number,
    // year: number
}

export class Store {
    todos: ITodo[] = []
    newTodoTitle: string = ''
    newTodoDesc: string = ''
    newTodoDate: any = new Date()
    newTodoDay: string = ''
    newTodoColor: string = '#DCDCDC'
    // newTodoHrs: number = this.newTodoDate.getHours()
    // newTodoMnts: number = this.newTodoDate.getMinutes()
    // newTodoDateOfMonth: number = this.newTodoDate.getDate()
    // newTodoMonth: number = this.newTodoDate.getMonth()
    // newTodoYear: number = this.newTodoDate.getFullYear()
    
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
      // if (e.target.value.trim().length > 0) {
        this.newTodoDate = new Date(e.target.value);
        this.getDayOfWeek();
        console.log(this.newTodoDate);
      // }
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
                // hrs: this.newTodoHrs,
                // mnts: this.newTodoMnts,
                // dateOfMonth: this.newTodoDateOfMonth,
                // month: this.newTodoMonth,
                // year: this.newTodoYear
            }
            this.todos.push(newTodo)
            this.newTodoTitle = ''
            this.newTodoDesc = ''
            this.newTodoDate = new Date()
            this.newTodoColor = '#BBC6FF'
            this.saveToLS()
            // this.calculateDateRelatedValues()
        }
    }

    // calculateDateRelatedValues = () => {
    //   this.newTodoHrs = this.newTodoDate.getHours()
    //   this.newTodoMnts = this.newTodoDate.getMinutes()
    //   this.newTodoDateOfMonth = this.newTodoDate.getDate()
    //   this.newTodoMonth = this.newTodoDate.getMonth()
    //   this.newTodoYear = this.newTodoDate.getFullYear()
    // }

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