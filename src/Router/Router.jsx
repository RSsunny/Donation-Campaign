import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import CategorisDetails from "../components/Categoris/CategorisDetails";


const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/details/:id',
                element:<CategorisDetails></CategorisDetails>,
                loader: ()=>fetch('/Catagoris.json')
            }
            
        ]
    }
])


export default router;