import Menu from "./Pages/Menu/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Foods from "./Pages/Menu/Foods/Foods";
import Drinks from "./Pages/Menu/Drinks/Drinks";
import { Provider } from "react-redux";
import { configStore } from "./Redux/store";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/foods", element: <Foods /> },
        { path: "/drinks", element: <Drinks /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={configStore}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  );
}
