import { createHashRouter } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Jobdetails from "./components/Jobdetails";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home />
    },
    {
        path: "/jobs",
        element: <Jobs />
    },
    {
        path: "/:jobid",
        element: <Jobdetails />,
        errorElement: <Home />
    },
    {
        path: "/dev-jobs",
        element: <Home />,
        errorElement: <Home />
    },
]);

export default router;