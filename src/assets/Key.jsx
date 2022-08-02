import React from 'react'

export default function Key(props) {

  {if (props.value === '=') {
      return <button 
      className='key equals'
      onClick={props.handleClick}
      >
        {props.value}
      </button>
    } else {
      return <button 
      className='key'
      onClick={props.handleClick}
      >
        {props.value}
      </button>
    }
  }

}
