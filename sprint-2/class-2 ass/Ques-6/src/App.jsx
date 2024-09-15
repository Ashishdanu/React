import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // Refs for the email and password inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Ref for the color-changing div
  const colorDivRef = useRef(null);

  // State to manage the value of the uncontrolled input
  const [inputValue, setInputValue] = useState("");

  // Effect to focus the email input on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Function to handle form submission
  const getValues = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
  };

  // Function to handle the uncontrolled input change
  const handleInputChange = () => {
    setInputValue(emailRef.current.value);
  };

  // Function to change background color of the div
  const handleDivClick = () => {
    colorDivRef.current.style.backgroundColor =
      colorDivRef.current.style.backgroundColor === "lightblue"
        ? "lightgreen"
        : "lightblue";
  };

  return (
    <div>
      <h1>Form and Interaction Example</h1>

      {/* Form with focusable and uncontrolled inputs */}
      <form>
        <div>
          <label>Enter your email:</label>
          <input type="text" ref={emailRef} onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <br />
        <button onClick={getValues}>Submit</button>
      </form>

      <br />

      {/* Display value of the uncontrolled input */}
      <div>
        <h2>Current Input Value:</h2>
        <p>{inputValue}</p>
      </div>

      <br />

      {/* Div with interactive background color change */}
      <div
        ref={colorDivRef}
        onClick={handleDivClick}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
          backgroundColor: "lightblue",
        }}>
        Click me to change my color
      </div>
    </div>
  );
}

export default App;
