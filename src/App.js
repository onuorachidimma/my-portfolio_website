import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from "./pages/about/about";
import Home from "./pages/home/home"


const router = createBrowserRouter([

  {
    path: "",
    element: <Home />
  },
  {
    path: "About",
    element: <About />
  },

])


const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App
