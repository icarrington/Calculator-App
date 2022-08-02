import React from 'react';
import { Textfit } from 'react-textfit';

export default function Display(props) {
  return (
    <Textfit mode='single' className='display'>
      {props.value}
    </Textfit>
  )
}
