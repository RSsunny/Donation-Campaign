import PropTypes from 'prop-types';

import useCategoris from "../../Hooks/useCategoris";
import CategorisCard from "./CategorisCard";


const Categoris = ({inputValue}) => {
    const [categori]=useCategoris()
    

   const {search}=inputValue
   
//    console.log(search);
    

const helth=categori?.filter(data=>data.categories.includes(search))


console.log(helth);

    
   
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 px-5">
           {
            search?  helth?.map((categori , i)=><CategorisCard key={i} categoris={categori} ></CategorisCard>):categori?.map((categoris , i)=><CategorisCard key={i} categoris={categoris} ></CategorisCard>)
           }

         


           
        </div>
    );
};
Categoris.propTypes={
    inputValue: PropTypes.array.isRequired
}
export default Categoris;