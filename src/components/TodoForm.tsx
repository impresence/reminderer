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

    const getDayOfWeek = () => {
        const d = new Date(store.newTodoDate) 
        const week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return week[d.getDay()]
    }

    const setColor = (e: any) => {
        const color = e.target.value
        store.setNewTodoColor(color)
    }
    
    return (
        <div className='flex flex-col items-center'>
            <div className=' text-white w-10/12 h-56 my-8 rounded-3xl bg-[#BBC6FF]'>
                <h1 className='m-8 text-5xl font-bold'>{store.newTodoTitle}</h1>
                <p className='m-8 text-3xl overflow-clip'>{store.newTodoDesc}</p>
                <h2 
                className=' m-8 text-right'>
                    <span className='font-bold mx-3'>
                    {getDayOfWeek()}
                    </span>
                    {store.newTodoDate} 
                </h2>
            </div>
            <div className='w-10/12 grid grid-cols-3 my-6 gap-7'>
                <input 
                className='border text-xl m-1 rounded-lg h-16 p-1' 
                value={store.newTodoTitle} 
                onChange={(e) => store.setNewTodoTitle(e)}
                placeholder='Title'
                maxLength={40}
                type="text" 
                />
                <textarea 
                className=' text-xl border m-1 row-span-2 rounded-lg p-1 overflow-auto'
                onChange={(e) => store.setNewTodoDesc(e)}
                placeholder='Description'
                maxLength={100}
                />
                <select 
                className='border m-1 rounded-lg h-16 p-1'
                onChange={setColor}>
                    <option value='#BBC6FF' className=' bg-[#BBC6FF]'></option>
                    <option value='#AADFFD' className=' bg-[#AADFFD]'></option>
                    <option value='#E1BBFF' className=' bg-[#E1BBFF]'></option>
                </select>
                <input 
                className='border m-1 rounded-lg h-16 p-1'
                onChange={(e) => store.setNewTodoDate(e)}
                type="date" 
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