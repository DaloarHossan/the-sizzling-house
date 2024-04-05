
import Banner from './Banner';
import HomeSlider from './HomeSlider';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<div className=" w-3/4 mx-auto">
			<HomeSlider></HomeSlider>
			</div>
			
		</div>
	);
};

export default Home;