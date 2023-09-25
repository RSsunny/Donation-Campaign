import { useEffect } from "react";
import { useState } from "react";



const useCategoris = () => {
    const [categoris, setCategoris]=useState()
    
    useEffect(()=>{
        fetch('/Catagoris.json')
            .then(res=>res.json())
            .then(data=>setCategoris(data))
    },[])
    
    return [categoris,setCategoris]
    
};

export default useCategoris;