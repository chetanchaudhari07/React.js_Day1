
import React,{useRef,useEffect} from 'react';
import './App.css';

const AutoFocusInput = ()=>{
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
    console.log(inputRef.current.focus());
  },[]);

  return(
    <div>
      <input ref={inputRef} type="text" placeholder="mount" />
    </div>
  )

};

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onInput={handleInputChange} placeholder="enter name" />  
    </div>
  );
};

const ChangeBackground = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
  };

  return (
    <div
      ref={divRef}
      onClick={handleClick}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
    >
      Click me to change color
    </div>
  );
};

function App() {
  return (
    <>
    <AutoFocusInput/>
    <UncontrolledInput/>
    <ChangeBackground/>
    </>
  )
  
  
}

export default App;
