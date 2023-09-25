import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])


export default router;