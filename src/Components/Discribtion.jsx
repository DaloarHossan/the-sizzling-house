import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Discribtion = ({img,title,des}) => {
	return (
	<div className='relative'>
			<div style={{backgroundImage:`url(${img})`} } className="h-48 md:h-96 bg-cover bg-center  bg-no-repeat w-full">
			
			
		</div>
		<div className="md:py-16  h-24 md:h-48 bg-[#151515] absolute text-white -mt-36 md:mx-24 mx-12 md:-mt-72 opacity-50 text-center">
				<div className="md:mx-12 m-2">
				<h1 className="font-cinzel font-semibold md:mb-2 md:text-xl text-sm">{title}</h1>
				<p className="font-inter font-semibold md:text-sm text-xs">{des}</p>
				</div>
			</div>
	</div>
	);
};

export default Discribtion;