import { useState, useEffect } from 'react';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <>
      <h1>My Website</h1>
      {isLogedIn ? (
        <Dashboard setIsLogedIn={setIsLogedIn} />
      ) : (
        <LoginComponent setIsLogedIn={setIsLogedIn} />
      )}
    </>
  );
}

export default App;

// Login Page
const LoginComponent = ({ setIsLogedIn }) => {
  useEffect(() => {

    console.log('login component is mounted');
    // All the statements that you wrote here will execute only after
    // component mouting
    return () => {
      console.log('login component is unmounted');
      //
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>Login Component</p>
      <button onClick={() => setIsLogedIn(true)}>Login</button>
    </div>
  );
};
// Dashboard

const Dashboard = ({ setIsLogedIn }) => {
  useEffect(() => {
    console.log('dashboard component is mounted');
    return () => {
      console.log('dashboard component is unmounted');
    };
  }, []);
  return (
    <>
      <p>Dash Board</p>
      <button onClick={() => setIsLogedIn(false)}>Logout</button>
    </>
  );
};

// isLogedin is false at the beginning
// So login component mounted
// clicked on login button changed the state isLogedin to true
// so as the state updated -> it will re-render or update login component
// as now the value of islogedin is true Login component will un-mount
// and dashboard component is mounted
