import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Main from './components/Main'


function App() {

  return (
		<>
			<div className="App">
			</div>
			<Routes>  
        <Route path='/' element={<Main/>} />
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
        <Route path='/create' element={<TodoForm/>} />
        <Route path='/list' element={<TodoList/>} />
			</Routes>
		</>
  )
}

export default App;