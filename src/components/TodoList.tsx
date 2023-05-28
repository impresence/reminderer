import React from 'react'
import { store } from '../store/store'
import { observer } from 'mobx-react-lite'
import { ITodo } from '../store/store' // import the Todo interface from store

const TodoList: React.FC = () => {
  const handleDelete = (todo: ITodo) => {
    store.deleteTodo(todo)
  }

  return (
    <div className='flex flex-col justify-center'>
        <input 
        className='border' 
        value={store.newTodoTitle} 
        onChange={(e) => store.setNewTodoTitle(e)} 
        type="text" 
        />
        <button onClick={() => store.addTodo()}>add todo</button>
        {store.todos.map((todo) => (
            <div key={todo.id} className='border p-2'>
                <h1>{todo.title}</h1>
                <p>{todo.id}</p>
                <button onClick={() => handleDelete(todo)}>delete todo</button>
            </div>
        ))}
    </div>
  )
}

export default observer(TodoList)