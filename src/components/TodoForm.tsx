import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../store/store'
import { ITodo } from '../store/store'

const TodoForm: React.FC = () => {
    const handleAdd = () => {
        if (store.newTodoTitle.length > 0) {
            store.addTodo()
        }
      }
    return (
        <div className='flex flex-col items-center'>
            <div className=' text-white w-10/12 h-56 my-8 rounded-3xl bg-[#BBC6FF]'>
                <h1 className='m-8 text-5xl'>{store.newTodoTitle}</h1>
            </div>
            <div className='w-10/12 grid grid-cols-3 my-6 gap-7'>
                <input 
                className='border m-1 rounded-lg h-16 p-1' 
                value={store.newTodoTitle} 
                onChange={(e) => store.setNewTodoTitle(e)}
                placeholder='Title'
                type="text" 
                />
                <textarea 
                className='border m-1 row-span-2 overflow-clip rounded-lg p-1'
                placeholder='Description'
                />
                <select 
                className='border m-1 rounded-lg h-16 p-1'>
                    <option className=' bg-slate-900'>gdf</option>
                    <option className=' bg-orange-600'>gdf</option>
                    <option className=' bg-lime-500'>gdf</option>

                </select>
                <input 
                className='border m-1 rounded-lg h-16 p-1'
                placeholder='Date' 
                type="text" 
                />
            </div>
            <input 
            className='border' 
            value={store.newTodoTitle} 
            onChange={(e) => store.setNewTodoTitle(e)} 
            type="text" 
            />
            <button onClick={handleAdd}>add todo</button>
        </div>
    )
}

export default observer(TodoForm)