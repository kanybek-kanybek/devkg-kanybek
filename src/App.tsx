import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Events from "./pages/Events/Events";
import Video from "./pages/VideosDev/Videos";
import Organizations from "./pages/Organizations/Organizations";
import Community from "./pages/Community/Community";
import JobOpenings1 from "./pages/JobOpenings/JobOpenings1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/JobOpenings",
    element: <JobOpenings1 />,
  },
  {
    path: "/Events",
    element: <Events />,
  },
  {
    path: "/Video",
    element: <Video />,
  },
  {
    path: "/Organizations",
    element: <Organizations />,
  },
  {
    path: "/Community",
    element: <Community />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
