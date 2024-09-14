import React, {useRef, useState,} from 'react';
import './App.css';

const DynamicFormInputFocus = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  return (
    <div>
      <form>
        <div>
          <label>Name: </label>
          <input ref={nameRef} type="text" placeholder="Enter-name" />
          <button type="button" onClick={() => handleFocus(emailRef)}>Email</button>
        </div>
        <div>
          <label>Email: </label>
          <input ref={emailRef} type="email" placeholder="Enter-email" />
          <button type="button" onClick={() => handleFocus(phoneRef)}>Phone</button>
        </div>
        <div>
          <label>Phone: </label>
          <input ref={phoneRef} type="tel" placeholder="phone-number" />
          <button type="button" onClick={() => handleFocus(nameRef)}>Name</button>
        </div>
      </form>
    </div>
  );
};


const RealTimeInputValidation = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateUsername = () => {
    const username = usernameRef.current.value;
    if (username.length < 5) {
      setUsernameError('Username must be at least 5 characters long');
    } else {
      setUsernameError('');
    }
  };

  const validateEmail = () => {
    const email = emailRef.current.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Username: </label>
          <input ref={usernameRef} type="text" placeholder="Enter username" onInput={validateUsername} />
          <p style={{ color: 'red' }}>{usernameError}</p>
        </div>
        <div>
          <label>Email: </label>
          <input ref={emailRef} type="email" placeholder="Enter email" onInput={validateEmail} />
          <p style={{ color: 'red' }}>{emailError}</p>
        </div>
      </form>
    </div>
  );
};


const CustomFormSubmission = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (name === '' || email === '') {
      setSubmissionMessage('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubmissionMessage('Invalid email format.');
      return;
    }

   
    const formData = {
      name,
      email,
    };

    console.log('Form submitted with data:', formData);

 
    setSubmissionMessage('Form submitted successfully!');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name: </label>
          <input ref={nameRef} type="text" placeholder="Enter name" />
        </div>
        <div>
          <label>Email: </label>
          <input ref={emailRef} type="email" placeholder="Enter email" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{submissionMessage}</p>
    </div>
  );
};

function App() {
  return (
    <>
    <div className='box'>
    <DynamicFormInputFocus/>
    <RealTimeInputValidation/>
    <CustomFormSubmission/>
    </div>
    
    
    
    </>
  )
}

export default App;
