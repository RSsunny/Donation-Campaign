import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 

const CategorisCard = ({categoris}) => {
    
    const {id,categories,colors,img, title}=categoris
    
    return (
       <Link to={`/details/${id}`}>
         <div >
            <div className="card   shadow-xl rounded-md " style={{backgroundColor: colors.bg }}>
                <figure><img className="h-[200px] w-full hover:scale-125 duration-1000" src={img} alt="Shoes" /></figure>
                <div className="" style={{color: colors.text}}>
                    <button className="px-3 py-2 font-bold m-4 rounded-md" style={{ backgroundColor:colors.button}}>{categories}</button>
                    <p className="texl-xl ml-5 mb-5 font-bold">{title}</p>
                   
                </div>
            </div>
        </div>
       
       </Link>
    );
};
CategorisCard.propTypes={
    categoris: PropTypes.object.isRequired
}
export default CategorisCard;