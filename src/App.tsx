import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList';


function App() {

  return (
		<>
			<div className="App">
                <TodoList/>
			</div>
			<Routes>
				<Route path='/login' element={<Login/>} />
				<Route path='/register' element={<Register/>} />
			</Routes>
		</>
  )
}

export default App;