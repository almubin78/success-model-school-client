import { createBrowserRouter } from "react-router-dom";
import Home from "../Main/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        
    }
])

export default router;