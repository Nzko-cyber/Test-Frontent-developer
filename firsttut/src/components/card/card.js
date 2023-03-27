import React from 'react'
import './card.css'
import { allcards } from '../../constants/cards'


export default function Card() {
  return (
    <div className='card'>
      <div className='upper'>
        <span> {allcards.title}</span>
       
      </div>
      <div className='center'>

      </div>
      <div className='footer'>

      </div>
      
      


    </div>
  )
}
