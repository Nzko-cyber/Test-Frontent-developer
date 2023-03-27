import React from 'react'
import New from '../components/table/new'
import './main.css'
import { allcards } from '../constants/cards'
export default function Main() {
  return (

        <div className='Main'>
          <h1>Заявки: 22</h1>
          
        <New/>
      </div>


  )
}
