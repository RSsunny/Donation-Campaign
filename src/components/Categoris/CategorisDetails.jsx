import { Link, useLoaderData, useParams } from "react-router-dom";




const CategorisDetails = () => {
  
    const AllCard=useLoaderData()
    const cardId=useParams()
    const id=cardId.id
    
    const singleCard=AllCard.find(card=>card.id== id)
    const {categories,colors,img, title,price,description}=singleCard
   
    console.log(singleCard);
    




   
    
    return (
        <div>

           <div className="relative h-[600px] bg-cover  bg-center" style={{backgroundImage:` url('${img}')`}}>
            <div className="absolute bottom-0  w-full h-32  bg-black opacity-70"></div>
            
                <div className=" absolute bottom-10 ml-10 ">
                    <div>
                        <Link to={'/'}>
                            <div className="text-white px-4 py-2 rounded-md" style={{backgroundColor: colors.button}}>Donate {price}</div>
                        </Link>
                        
                    </div>
                </div>
                    

            </div>
            <div>
                <h1 className="text-5xl font-bold my-5">{title}</h1>
                <p>{description} There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their s education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential. </p>
            </div>
        </div>
    );
};

export default CategorisDetails;