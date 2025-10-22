import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Foods from "./Pages/Menu/Foods/Foods";
import Drinks from "./Pages/Menu/Drinks/Drinks";
import { Provider } from "react-redux";
import { configStore } from "./Redux/store";
import DrinkDetails from "./Pages/DrinkDetails/DrinkDetails";
import NotFoundPage from "./Pages/NotFound/NotFound";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";

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
        { path: "/drinks/:id", element: <DrinkDetails /> },
        { path: "/foods/:id", element: <FoodDetails /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFoundPage /> },
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
