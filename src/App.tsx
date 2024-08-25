import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import JobOpenings from "./pages/JobOpenings/JobOpenings";
import Events from "./pages/Events/Events";
import Video from "./pages/VideosDev/Videos";
import Organizations from "./pages/Organizations/Organizations";
import Community from "./pages/Community/Community";
import AddVacancy from "./pages/addVacancy/addVacancy";
import JobPage from "./components/JobPage/JobPage";
import Sinup from "./pages/sinup/sinup";
import EventsForm from "./components/eventsForm/eventsForm";
import VideoForm from "./components/videoForm/videoForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/JobOpenings",
        element: <JobOpenings />,
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
    {
        path: "/AddVacancy",
        element: <AddVacancy />,
    },
    {
        path: "/JobPage/:id",
        element: <JobPage />,
    },
    {
        path: "/Sinup/:id",
        element: <Sinup />,
    },
    {
        path: "/eventsForm/:id",
        element: <EventsForm />,
    },
    {
        path: "/videoForm/:id",
        element: <VideoForm />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
