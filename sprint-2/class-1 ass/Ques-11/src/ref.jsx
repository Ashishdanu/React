import React, { useEffect, useRef } from 'react';

function AdvancedUseRef() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const getTheValues = () => {
    console.log(emailRef.current.value);
    console.log(nameRef.current.value);
  };
  return (
    <div>
      AdvancedUseRef
      <br />
      Email
      <input type="text" ref={emailRef} />
      <br />
      Name
      <input type="text" ref={nameRef} />
      <br />
      State
      <input type="text" />
      <br />
      <button onClick={getTheValues}>Get The Values</button>
    </div>
  );
}

export default AdvancedUseRef;
