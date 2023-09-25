import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
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