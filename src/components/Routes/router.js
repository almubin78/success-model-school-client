import { createBrowserRouter } from "react-router-dom";
import Errors from "../Error/Errors";
import Home from "../Main/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:([
            {
                
            }
        ])
    },
    {
        path:'*',
        element:<Errors></Errors>
    }
])

export default router;