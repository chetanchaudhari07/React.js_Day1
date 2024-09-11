import React, {useState, useEffect} from 'react';
import './App.css';

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
   
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    
    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
    </div>
  );
}

function ScrollEventComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Scroll Position: {scrollPosition}px</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <TimerComponent/>
      <ScrollEventComponent/>
    </div>
  )

}

export default App;
