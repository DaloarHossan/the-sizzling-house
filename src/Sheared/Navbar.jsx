import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo2.png';
const Navbar = () => {

	
	const NavLinks =<>
		<li><Link to='/'>Home</Link></li>
		<li><Link to='/contactus'>contact us</Link></li>
		<li><Link to='/dashboard'>dashboard</Link></li>
		<li><Link to='/our menu'>our menu</Link></li>
		<li><Link to='/ourshop'>our shop</Link></li>
		<li><Link to='/longIn'>Log in</Link></li>
	</>
		
	
	const [isOpen, setIsOpen] =useState(false);

	const toggle=()=>{
		setIsOpen(!isOpen);
	}
	return (
		<div className="cursor-pointer uppercase fixed z-10 w-full text-white bg-black md:py-3 bg-opacity-35 mb-6">	
			<nav className="flex justify-between items-center h-12 px-6 py-6">
		<Link to='/'><img src={logo} alt=""  className="w-3/5"/></Link>
		<div >
			<ul className="hidden md:flex gap-6 font-inter text-sm font-extrabold ">
				{NavLinks}
			</ul>
			<button className="md:hidden" onClick={toggle}>
			{isOpen?'X':<FontAwesomeIcon icon={faBars} />}
			</button>
			
		</div>
	
	</nav>
	{isOpen && <ul className="flex flex-col justify-center items-center">
			
			{NavLinks}
			</ul>}</div>
	
	);
};

export default Navbar;