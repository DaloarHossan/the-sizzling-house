

const MenuItems = ({item}) => {
	const {image,name,price,recipe}=item
    console.log(image);
	return (
		<div className="flex space-x-4">
			<div>
				<img className="w-[118px] h-[104px]" style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
			</div>
			
			<div className="">
            <h1 className="font-cinzel text-xl uppercase">{name} ------------------</h1>
			<p className="font-inter text-sm text-slate-700">{recipe}</p>
			</div>
			<h3 className="text-[#bb8506] text-xl">${price}</h3>
			
		
			
		</div>
	);
};

export default MenuItems;
