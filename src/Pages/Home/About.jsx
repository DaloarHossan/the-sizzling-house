import Discribtion from "../../Components/Discribtion";
import img from "../../assets/home/chef-service.jpg"

const About = () => {
	return (
	   <div className=" px-2 my-12">
		<Discribtion img={img}
	   title={"The sizzlink house"}
	   des={"we pride ourselves on offering an unparalleled dining experience that tantalizes the taste buds and leaves our guests craving more."}>
	   </Discribtion>
	   </div>
	);
};

export default About;