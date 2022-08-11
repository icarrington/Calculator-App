import './App.css'
import Display from './assets/Display'
import KeyPad from './assets/KeyPad'
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [expression, setExpression] = useState('');

  function handleClick(event) {
    const buttonText = event.target.textContent;
    
    if (buttonText === 'AC') {
      setExpression(0);
      setValue(0);
    }else if (buttonText === '=') {

      try {
        let result = eval(expression);
        setValue(result);
        setExpression(result);
      } catch (err){
        alert('Please use a valid number');
      }

    }else if (buttonText === 'x') {
      setExpression(prev => prev + '*');
      setValue(prevValue => prevValue + buttonText)
    }else if (buttonText === '÷') {
      setExpression(prev => prev + '/');
      setValue(prevValue => prevValue + buttonText)
    }else {
      if(value == 0) {
        setExpression(buttonText);
        setValue(buttonText);
      }
      else {
        setExpression(prev => prev + buttonText);
        setValue(prevValue => prevValue + buttonText);
      }
    }
  }

  return (
    <div className='app'>
      <Display value={value} />
      <KeyPad handleClick={handleClick} />
    </div>
  )
}

export default App
