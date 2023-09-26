import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const location=useLocation()
    useEffect(()=>{
        document.title=location.pathname
        if(location.pathname==='/'){
            document.title=`Donation || Home`
        }else{
            document.title=`Donation-${location.pathname.replace('/','-')}`
        }
        if(location.state){
            document.title=`${location.state}`
        }
    },[location])


    return (
        <>
        
            <section className="max-w-7xl mx-auto ">
                <Header></Header>
            </section >
            <section className="max-w-7xl mx-auto my-10">
                <Outlet></Outlet>
            </section>
            <section className="max-w-7xl mx-auto ">
                <Footer></Footer>
            </section>
        
        
        </>
    );
};

export default MainLayout;