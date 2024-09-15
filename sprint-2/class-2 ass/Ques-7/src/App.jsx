import  Form  from "./form";

function App() {
  return <Form />;
}
export default App;

// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   // Refs for the input fields
//   const userNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   // States for validation feedback
//   const [userNameError, setUserNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   // Handle focus management based on user interaction
//   const handleFocus = (ref) => {
//     if (ref.current) {
//       ref.current.focus();
//     }
//   };

//   // Validate user input
//   const validateUserName = () => {
//     const userName = userNameRef.current.value;
//     if (userName.length < 3) {
//       setUserNameError("Username must be at least 3 characters long.");
//     } else {
//       setUserNameError("");
//     }
//   };

//   const validateEmail = () => {
//     const email = emailRef.current.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setEmailError("Please enter a valid email address.");
//     } else {
//       setEmailError("");
//     }
//   };

//   const validatePassword = () => {
//     const password = passwordRef.current.value;
//     if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters long.");
//     } else {
//       setPasswordError("");
//     }
//   };

//   // Custom form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     // Perform validation before submitting
//     validateUserName();
//     validateEmail();
//     validatePassword();

//     if (userNameError || emailError || passwordError) {
//       return; // Do not submit if there are validation errors
//     }

//     // Collect form data
//     const userName = userNameRef.current.value;
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     // Simulate form submission
//     console.log("Form Submitted:");
//     console.log("User Name:", userName);
//     console.log("Email:", email);
//     console.log("Password:", password);

//     // You can also send this data to the server here
//   };

//   return (
//     <>
//       <h1>Dynamic Form</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             User Name
//             <input
//               type="text"
//               ref={userNameRef}
//               onBlur={validateUserName}
//               placeholder="Enter your username"
//               onFocus={() => handleFocus(userNameRef)}
//             />
//           </label>
//           {userNameError && <p className="error">{userNameError}</p>}
//         </div>

//         <div>
//           <label>
//             Email
//             <input
//               type="text"
//               ref={emailRef}
//               onBlur={validateEmail}
//               placeholder="Enter your email"
//               onFocus={() => handleFocus(emailRef)}
//             />
//           </label>
//           {emailError && <p className="error">{emailError}</p>}
//         </div>

//         <div>
//           <label>
//             Password
//             <input
//               type="password"
//               ref={passwordRef}
//               onBlur={validatePassword}
//               placeholder="Enter your password"
//               onFocus={() => handleFocus(passwordRef)}
//             />
//           </label>
//           {passwordError && <p className="error">{passwordError}</p>}
//         </div>

//         <button type="submit">Submit Form</button>
//       </form>
//     </>
//   );
// }

// export default App;
