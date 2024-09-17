import { Heading, Text } from "@chakra-ui/react";
import Home from "./component/Home";
import About from "./component/About";
import Contacts from "./component/Contacts";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
          <Navbar />
          <Contacts />
        </>
      ),
    },
  ]);

  return (
    <>
      <Heading>Ques-8</Heading>
      <Text>Ques - 8</Text>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
