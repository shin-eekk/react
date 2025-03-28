import { StyledButton, Styledmenu } from './ui/Testui';
import {Badges} from './ui/Ui';
import React, {useState} from 'react';


function App() {
  const [active, activeSet] = useState(0);
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {Array.from({ length: 5 }, ( v, idx) => (
        <StyledButton key={idx} onClick={()=>{activeSet(idx)}} 
          className={idx === active ? 'active' : ''}>
          <Styledmenu>{idx}</Styledmenu>
        </StyledButton>
      ))}
      <Badges className='N'>50%</Badges>
      <Badges className='S'>30%</Badges>
    </div>
  );
}

export default App;
