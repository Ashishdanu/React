import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Home from "./home";
import Navbar from "./navbar";
import Register from "./register";
import Users from "./users";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar />
          <Register />
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <>
          <Navbar />
          <Users/>
         
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} basename="/login" />
    </>
  );
}

export default App;
