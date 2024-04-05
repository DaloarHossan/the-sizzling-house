
import Slider from "react-slick";

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import SectionTitle from "../../Components/SectionTitle";
const HomeSlider = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
 return (
	<section>
		<SectionTitle
		heading={"Our menu"} subHeading={"form 11:00am to 10:00pm"}
		></SectionTitle>
		<div className="slider-container">
      <Slider {...settings}>
        <div >
		<img src={slide1} alt="" />
		<h1 className='uppercase md:text-4xl font-cinzel text-center -mt-16 text-white '>Salads</h1>
        </div>
        <div >
		<img src={slide2} alt="" />
		<h1 className='uppercase md:text-4xl font-cinzel text-center -mt-16 text-white '>Pizzas</h1>
        </div>
        <div >
		<img src={slide3} alt="" />
		<h1 className='uppercase md:text-4xl font-cinzel text-center -mt-16 text-white '>Soups</h1>
        </div>
        <div >
		<img src={slide4} alt="" />
		<h1 className='uppercase md:text-4xl font-cinzel text-center -mt-16 text-white '>desserts</h1>
        </div>
       
        
      </Slider>
    </div>
	</section>
	);
};

export default HomeSlider;