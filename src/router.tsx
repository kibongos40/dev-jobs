import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

const router = createBrowserRouter([
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
        path: "/dev-jobs",
        element: <Home />,
        errorElement: <Home />
    },
]);

export default router;