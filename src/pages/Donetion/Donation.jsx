import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStor } from "../../Local/localStorage";
import DonationCard from "../../components/Donation Card/DonationCard";


const Donation = () => {
    const categoris=useLoaderData()
    const [storId,setStorId]=useState([])
    const [display,setdisplay]=useState([])
    const [show,setShow]=useState(true)
    
   
    useEffect(()=>{
        const storcardId=getLocalStor()
        if(categoris){
            const matchId=categoris.filter(categori=>storcardId.includes(categori.id))
            setStorId(matchId)
            setdisplay(matchId)
        }
    },[categoris])

    const handleShow=()=>{
            setShow(!show)
            setdisplay(storId)

    }





    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between px-2 my-5">
            {
             show?   display.slice(0,4)?.map((card , i)=><DonationCard key={i} card={card}></DonationCard>):display?.map((card , i)=><DonationCard key={i} card={card}></DonationCard>)
            }

        </div>
        {
            
          storId.length>4?  <div className="text-center ">
            <button onClick={handleShow} className="px-4 py-2  border rounded-sm border-yellow-500 text-yellow-500 font-bold capitalize">{show? `see All`: `see less`}</button>
        </div>:''
        }
        </>
    );
};

export default Donation;