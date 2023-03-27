import React from 'react'
import './table.css'
import Card from '../card/card'
export default function New() {
  return (
    <div className='Table'>
        <div className='table-tittle'>
            <h1>Новые: 4</h1>
        </div>
        <div className='cards'>
            <Card/>
            

        </div>


    </div>
  )
}
