import {  useLoaderData, useParams } from "react-router-dom";
import {  saveLocalStor } from "../../Local/localStorage";
import Swal from "sweetalert2";

import { useState } from "react";




const CategorisDetails = () => {
    const [on,setOn]=useState(true)
    const AllCard=useLoaderData()
    const cardId=useParams()
    const id=cardId.id
    
    const singleCard=AllCard.find(card=>card.id== id)
    const {colors,img, title,price,description}=singleCard
   
 
    

    const handleStor=()=>{
        saveLocalStor(id)

       {on && Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Confrim donation',
            showConfirmButton: false,
            timer: 1500
          })
        }
        

    }


   
    
    return (
        <div>

           <div className="relative h-[600px] bg-cover  bg-center" style={{backgroundImage:` url('${img}')`}}>
            <div className="absolute bottom-0  w-full h-32  bg-black opacity-70"></div>
            
                <div onClick={handleStor} className="cursor-pointer absolute bottom-10 ml-10 ">
                    <div onClick={()=>setOn(true)}>    
                        <div className="text-white px-4 py-2 rounded-md" style={{backgroundColor: colors.text}}>Donate $ {price}</div>   
                    </div>
                </div>
                    

            </div>
            <div>
                <h1 className="text-5xl font-bold my-5">{title}</h1>
                <p className="text-lg font-medium"> {description} There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their s education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential. </p>
            </div>
        </div>
    );
};

export default CategorisDetails;