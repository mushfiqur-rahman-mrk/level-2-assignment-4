import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { selectTotalItems } from "../../../redux/features/cartSlice";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const totalItems = useAppSelector((state: RootState) => selectTotalItems(state.cart));

    const getActiveLinkClass = (isActive: boolean) => 
        isActive ? "underline text-teal-500" : "hover:underline transition-colors duration-300";

    return (
        <header className="fixed top-0 left-0 z-30 w-full bg-transparent backdrop-blur-md shadow-lg" style={{ height: '80px' }}>
            <div className="container gap-10 mx-auto flex items-center justify-between h-full px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="https://thumbsnap.com/i/u5i34FT6.png" className="h-12 w-12 md:h-16 md:w-16" alt="Logo" />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow items-center justify-between space-x-8 text-white font-semibold">
                    <div className="flex space-x-8 text-primary">
                        <NavLink 
                            to={'/'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to={'/products'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            to={'/review'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            Reviews
                        </NavLink>
                    </div>
                    <div className="flex space-x-8 items-center text-primary">
                        <NavLink 
                            to={'/about'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            About Us
                        </NavLink>
                        <NavLink 
                            to={'/contact'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            Contact Us
                        </NavLink>
                        <NavLink 
                            to={'/cart'} 
                            className={({ isActive }) => getActiveLinkClass(isActive)}
                        >
                            <div className="flex items-center">
                                <BiCart className="h-6 w-6" />
                                <span className="ml-2">{totalItems}</span>
                            </div>
                        </NavLink>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <IoCloseCircleOutline className="h-8 w-8 text-white" />
                        ) : (
                            <CiMenuBurger className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white bg-opacity-90 shadow-lg absolute top-16 left-0 right-0 p-6 space-y-4 text-gray-700 font-semibold">
                    <NavLink 
                        to={'/'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to={'/products'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        Products
                    </NavLink>
                    <NavLink 
                        to={'/'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        Reviews
                    </NavLink>
                    <NavLink 
                        to={'/cart'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        <div className="flex items-center">
                            <BiCart className="h-6 w-6 mr-2" />
                            Cart
                        </div>
                    </NavLink>
                    <NavLink 
                        to={'/about'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to={'/contact'} 
                        onClick={() => setIsOpen(false)} 
                        className={({ isActive }) => getActiveLinkClass(isActive)}
                    >
                        Contact Us
                    </NavLink>
                </nav>
            )}
        </header>
    );
};

export default NavBar;
