import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({card}) => {
    const {id,img,price,title,colors,categories}=card
    console.log(card);
    return (
        <div className='flex gap-4 md:gap-8 items-center pr-5  rounded-md' style={{backgroundColor: colors.bg}}>
            <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px]  overflow-hidden'>
                <img className='w-full h-full rounded-md hover:scale-125 duration-1000' src={img} alt="" />
            </div>
            <div className='space-y-1 md:space-y-2'>
                       
                <div className="text-white px-2 py-1 rounded-md inline-block" style={{backgroundColor: colors.button}}>{categories}</div>
                <h1 className='text-sm md:text-2xl font-bold text-black'>{title}</h1> 
                <p className='text-base md:text-2xl font-bold' style={{color:colors.text}}>$ {price}</p> 
                <Link to={`/details/${id}`}>
                    <button className="text-white px-2 md:px-4 py-1 md:py-2 rounded-md mt-3" style={{backgroundColor: colors.text}}> View Details</button> 
                </Link>
                    
            </div>
        </div>
    );
};
DonationCard.propTypes={
    card: PropTypes.object.isRequired
}
export default DonationCard;