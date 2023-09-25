import { useState } from "react";
import Categoris from "../Categoris/Categoris";
import Banner from "../Header/Banner";


const Home = () => {

    const [value,setValue]=useState([])
    const handleSubmit=e=>{
        e.preventDefault()
        const inptuvalue={ search: e.target.search.value};
        return setValue(inptuvalue)
    }
    return (
        <>
        <Banner handleSubmit={handleSubmit}></Banner>
        <Categoris inputValue={value}></Categoris>
        
        </>
    );
};

export default Home;