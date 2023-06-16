import React from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '../store/store'
import { ITodo } from '../store/store'
import { Link } from 'react-router-dom'

const TodoForm: React.FC = () => {

  const isValid = store.newTodoTitle.length >= 2 && store.newTodoDesc.length >= 2 && store.newTodoDate.length > 0

    const handleAdd = () => {
        if (isValid) {
            store.addTodo()
        }
    }

    
    return (
        <div className='flex flex-col items-center'>
            <Link to='/list'>
                <button className='mt-8 text-white bg-theme-blue px-20 py-3 font-semibold rounded-xl hover:text-white hover:bg-btn-blue-hover transition ease-in-out'>
                    🠔 List
                </button>
            </Link>
            <div 
            className=' text-white w-10/12 h-56 my-8 rounded-3xl border'
            style={{backgroundColor: store.newTodoColor}}>
                <h1 className='m-8 text-5xl font-bold'>{store.newTodoTitle}</h1>
                <p className='m-8 text-3xl overflow-clip'>{store.newTodoDesc}</p>
                <h2 
                className=' m-8 text-right'>
                    <span className='font-bold mx-3'>
                    {store.newTodoDay}
                    </span>
                    {store.newTodoDate} 
                </h2>
            </div>
            <div className='w-10/12 grid grid-cols-3 my-6 gap-7'>
                <input 
                name='title'
                className='border text-xl m-1 rounded-lg h-16 p-1' 
                value={store.newTodoTitle} 
                onChange={(e) => store.setNewTodoTitle(e)}
                placeholder='Title'
                maxLength={40}
                type="text" 
                />
                <textarea 
                name='description'
                className=' text-xl border m-1 row-span-2 rounded-lg p-1 overflow-auto resize-none'
                value={store.newTodoDesc}
                onChange={(e) => store.setNewTodoDesc(e)}
                placeholder='Description'
                maxLength={100}
                />
                <select 
                className=' m-1 rounded-lg h-16 p-1 border'
                style={{backgroundColor: store.newTodoColor}}
                onChange={(e) => store.setNewTodoColor(e)}>
                    <option value="#DCDCDC">--Choose color--</option>
                    <option value='#BBC6FF' className=' bg-[#BBC6FF]'>Lavender</option>
                    <option value='#AADFFD' className=' bg-[#AADFFD]'>Light Blue</option>
                    <option value='#E1BBFF' className=' bg-[#E1BBFF]'>Pink</option>
                    <option value='#A6EEA9' className=' bg-[#A6EEA9]'>Lime</option>
                    <option value='#F5D88D' className=' bg-[#F5D88D]'>Yellow</option>
                </select>
                <input 
                name='date'
                className='border m-1 rounded-lg h-16 p-1'
                onChange={(e) => store.setNewTodoDate(e)}
                type="date" 
                />
                <div className=' text-red-600'>
                    {store.newTodoTitle.length < 2 ? <div>! Title min length is 2 symbols</div> : <div> </div>}
                    {store.newTodoDesc.length < 2 && <div>! Description min length is 2 symbols</div>}
                    {store.newTodoDate.length < 2 && <div>! Choose date for reminding</div>}
                </div>
            </div>
                <Link className='mt-8' to='/list'> 
                <button 
                disabled={isValid ? false : true}
                style={{backgroundColor: isValid ? '' : 'grey'}}
                onClick={handleAdd}
                className='text-white bg-theme-blue px-20 py-3 font-semibold rounded-xl hover:text-white hover:bg-btn-blue-hover transition ease-in-out'>
                    Create
                </button>
                </Link>
        </div>
    )
}

export default observer(TodoForm)