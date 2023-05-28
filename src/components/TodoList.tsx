import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../store/store'
import { ITodo } from '../store/store'

const TodoList: React.FC = () => {
    const handleDelete = (todo: ITodo) => {
        store.deleteTodo(todo)
    }

    return (
        <div className='flex flex-col justify-center'>
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