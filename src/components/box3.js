import React, { useState } from 'react';
import './box3.css';

function Header() {
    const [count, setCount] = useState(0);
  
    return (
        <div className='box3 container'>
            №2
            <h2>Вода {count} </h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count + 10)}>+10</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count - 10)}>-10</button>
        </div>
    );
  }
    
export default Header;