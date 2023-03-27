import React from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import New from './components/table/new'
import Main from './pages/Main'

export default function App() {
  return (
    <div className='app'>
      <Navbar/>

      <div className='Container'>

      
      <Sidebar/>
      <Main/>

      </div>
        
  

      


    </div>
  )
}
