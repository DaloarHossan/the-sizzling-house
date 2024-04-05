
const SectionTitle = ({heading,subHeading}) => {
	return (
		<div className="text-center my-12 md:w-4/12 mx-auto">
			<p className="text-yellow-500 font-inter text-xl italic pb-4">---{subHeading}---</p>
			
			<h1 className="text-4xl uppercase font-inter border-y-4 py-4">{heading}</h1>
		</div>
	);
};

export default SectionTitle;