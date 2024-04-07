
import MenuItems from "../../Components/MenuItems";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
	const [menu,loading]=useMenu();
	const popular=menu.filter(item=>item.category === "popular");
	console.log(popular);
	return (
		<section>
			<SectionTitle
			heading={"From our menus"}
			subHeading={"check it out"}>
			</SectionTitle>
			<div className="grid md:grid-cols-2 gap-4">
                {
					popular.map(item=><MenuItems
					key={item._id}
					item={item}
					></MenuItems>)
				}
		    </div>
		</section>
	);
};

export default PopularMenu;