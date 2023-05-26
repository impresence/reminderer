import React from 'react'
import { store } from '../store/store'
import { observer } from 'mobx-react-lite'

const TodoList: React.FC = () => {
  return (
    <div className='flex flex-col justify-center'>
        <input className='border' onChange={(e) => store.setNewTodoTitle(e)} type="text" />
        <button onClick={() => store.addTodo()}>add todo</button>
        <button>remove todo</button>
        {store.todos.map((todo) => (
            <div className='border p-2'>
                <h1>{todo.title}</h1>
                <p>{todo.id}</p>
            </div>
        ))}
    </div>
  )
}

export default observer(TodoList)