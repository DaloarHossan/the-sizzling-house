
import About from './About';
import Banner from './Banner';
import HomeSlider from './HomeSlider';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<div className=" w-3/4 mx-auto">
			<HomeSlider></HomeSlider>
			<About></About>
			</div>
			
		</div>
	);
};

export default Home;