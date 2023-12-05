import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { About } from "./pages/about/about";
import { Calendar } from "./pages/calendar/calendar";
import { Notes } from "./pages/notes/notes";
import { Results } from "./pages/results/results";
import { Sale } from "./pages/sale/sale";
import { Videos } from "./pages/videos/videos";
import "./index.scss";
import { Home } from "./pages/home/home";
import "./i18n";
import { Races } from "./components/races/races";

const container = document.getElementById("root")!;
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <RouterError />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "results",
        children: [
          {
            index: true,
            element: <Results />,
          },
          {
            path: ":year/:race",
            element: <Races />,
          },
        ],
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
