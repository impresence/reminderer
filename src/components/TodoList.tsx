import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../store/store'
import { ITodo } from '../store/store'
import { Link } from 'react-router-dom'

const TodoList: React.FC = () => {
    const handleDelete = (todo: ITodo) => {
        store.deleteTodo(todo)
    }

    
    return (
        <div className='flex flex-col items-center'>
            <Link to='/create'>
                <button 
                className='mt-8 text-white bg-theme-blue px-20 py-3 font-semibold rounded-xl hover:text-white hover:bg-btn-blue-hover transition ease-in-out'
                >
                    Create new
                </button>
            </Link>
            <div className='mt-7 text-2xl'>To complete to-do, click on it!</div>
            {store.todos.map((todo) => (
            <div
            onClick={() => todo.completed = !todo.completed} 
            className=' text-white w-10/12 h-56 my-8 rounded-3xl transform duration-300'
            style={{backgroundColor:todo.color, opacity: todo.completed ? '0.6' : '1', scale: todo.completed ? '0.9' : '1'}}
            >
                <div className='flex justify-between'>
                    <h1 className='mt-8 ml-8 text-5xl font-bold'>{todo.title}</h1>
                    <button 
                    onClick={() => handleDelete(todo)} 
                    className=' rounded-full px-3 bg-red-600 mr-8 mt-8 text-2xl'
                    >
                        Delete
                    </button>
                </div>
                <p className='m-8 text-3xl overflow-clip'>{todo.description}</p>
                <h2 
                className=' m-8 text-right'>
                    <span className='font-bold mx-3'>
                      {todo.day}
                    </span>
                      {`${todo.date.getHours()}:${todo.date.getMinutes()} `}
                      {`${todo.date.getDate()} / ${todo.date.getMonth() + 1} / ${todo.date.getFullYear()}`}
                </h2>
            </div>
            ))}
        </div>
    )
}

export default observer(TodoList)