import React from 'react'

export default function Key(props) {

  return (
    <button 
      className={(props.value === '=') ? 'key equals' : 'key'}
      onClick={props.handleClick}
      >
        {props.value}
    </button>
    )

}
