import { useRef, useState } from "react";
import "./Form.css";
function Form() {
  // user ref
  const emailRef = useRef(null);
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  // error states handenlungn
  const [userError, setUser] = useState("");
  const [passwordError, setPassworod] = useState("");
  const [emailError, setEmail] = useState("");

  const validateUser = () => {
    if (userRef.current.value.length < 3) {
      setUser("Username should be at least 3 characters long");
    } else {
      setUser("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRef.current.value)) {
      setEmail("Invalid email");
    } else {
      setEmail("");
    }
  };

  const validatePassword = () => {
    if (passwordRef.current.value.length < 8) {
      setPassworod("Password should be at least 8 characters long");
    } else {
      setPassworod("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    validateUser();
    validateEmail();
    validatePassword();

    // if all validation passed then submit the form
    if (userError || emailError || passwordError) {
      alert("Please fill in all fields correctly");

      return; // Do not submit if there are validation errors
    }

    const User = {
      "user ": userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("form Submitted successfully");
    console.log("user ", User);
  };

  const handleFocus = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          ref={emailRef}
          placeholder="ente5r your email"
          onFocus={handleFocus}
          onBlur={validateEmail}
        />
      </div>
      <div>
        <input
          type="text"
          ref={userRef}
          placeholder="Username"
          onFocus={handleFocus}
          onBlur={validateUser}
        />
      </div>
      <div>
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          onFocus={handleFocus}
          onBlur={validatePassword}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
