import React from 'react'
import Key from './Key'
import { useState } from 'react'

export default function KeyPad(props) {
  const [values, setValues] = useState(
    ['+', '-','x', '÷', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'AC', '.', '=']
  )

  const keys = values.map(value => {
    return (
      <Key 
      key={value} 
      value={value}
      handleClick={props.handleClick} />
    )
  })

  return (
    <div className='keypad'>
      {keys}
    </div>
  )
}
