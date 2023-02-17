import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
    return (
        <div className='container'>
            №1
            <div className='box1'>
                <h1>Hello world</h1>
                <p>This is a one thing</p>
                <button onClick={() => setCount(count + 1)}>
                Click Me
                </button>
                <p>I have toggled {count} times</p>
            </div>
            
            <div className='box2'>
                <h1>Hello world</h1>
                <p>This is a one thing</p>
                <button onClick={() => setCount2(count2 + 1)}>
                Click Me
                </button>
                <p>I have toggled {count2} times</p>
            </div>
        </div>
    );
  }
    
export default Header;