import PropTypes from 'prop-types';



const Banner = ({handleSubmit}) => {
   
    return (
        
        <section  className="">
            <div className="relative h-[600px] bg-cover  bg-center" style={{backgroundImage:` url('banner.jpg')`}}>
            <div className="absolute inset-0 bg-white opacity-70"></div>
            
                <div className="flex justify-center items-center inset-0 h-full absolute">
                    <div>
                        <h1 className="text-xl md:text-5xl font-bold text-black text-center">I Grow By Helping People In Need
                        </h1>
                        <div className="mt-10 text-center">
                                <form onSubmit={handleSubmit} className="relative inline-block">
                                    <input className="w-[300px] md:w-[400px] py-2  rounded-md bg-white pl-4 text-black outline-none" type="search" name="search" id="1" placeholder="Search " />
                                    <input  className="absolute right-0 bg-[#FF444A] py-2 -md px-3 text-white" type="submit" value="Search" />
                                </form>
                        </div>
                    </div>
                </div>
                    

            </div>
        </section>
    );
};
Banner.propTypes={
    handleSubmit: PropTypes.func.isRequired
}
export default Banner;