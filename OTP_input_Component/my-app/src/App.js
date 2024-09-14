import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const handleOTPSubmit = (otp) => {
    alert(`Submitted OTP: ${otp}`);

  };

  return (
    <div className="App">
      
      <OTPInput length={6} onSubmit={handleOTPSubmit} />
    </div>
  );
}

const OTPInput = ({ length = 6, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);


  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];

    if (value.match(/^[0-9]$/)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };


  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);


      if (index > 0 && !otp[index]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };


  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text').split('');
    const newOtp = [...otp];

    pastedData.forEach((char, i) => {
      if (i < length && char.match(/^[0-9]$/)) {
        newOtp[i] = char;
      }
    });

    setOtp(newOtp);


    const lastIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[lastIndex].focus();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.every((digit) => digit !== '')) {
      onSubmit(otp.join(''));
    } else {
      alert('Please fill all OTP fields.');
    }
  };

  return (
   <>
   <div className='box'>
   <h1>Enter OTP</h1>
   <form onSubmit={handleSubmit} >
      <div style={{ display: 'flex', gap: '10px' }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            maxLength={1}
            style={{
              width: '40px',
              height: '40px',
              fontSize: '24px',
              textAlign: 'center',
            }}
          />
        ))}
      </div>
      <button type="submit" style={{ marginTop: '20px' }}>
        Submit OTP
      </button>
    </form>
   </div>
   </>
  );
};

export default App;
