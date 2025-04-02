import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";

import DetailsKey from "./Pages/DetailsKey.tsx";
import HomePage from "./Pages/HomePage.tsx";
import Tableau from "./Pages/Tableau.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tableau",
        element: <Tableau />,
      },
      {
        path: "/detailsKey/:id",
        element: <DetailsKey />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
