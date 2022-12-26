import { createBrowserRouter } from "react-router-dom";
import Errors from "../Error/Errors";
import AddmissionForm from "../Form/AddmissionForm";
import Home from "../Main/Home";
// import OurSuccess from "../Main/OurSuccess";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:([
            {
                // path:'/results',
                // element:<OurSuccess></OurSuccess>
            }
        ])
    },
    {
        path:'*',
        element:<Errors></Errors>
    },
    {
        path:'/admission',
        element:<AddmissionForm></AddmissionForm>
    }
])

export default router;