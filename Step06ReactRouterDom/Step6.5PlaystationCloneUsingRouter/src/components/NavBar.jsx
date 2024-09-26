import React from "react";
import { NavLink} from "react-router-dom";
function NavBar(){
    return(
        <>
            <div className="sony h-9 w-full bg-black flex justify-end">
                    <img src="https://vectorseek.com/wp-content/uploads/2020/12/Sony-Logo-Vector.png" className=" h-8 mr-2" alt="sony logo" />
                </div>
                <nav className="navLinks flex space-x-5 text-xs text-gray-500 font-semibold justify-between items-center">
                    <div className=" flex ml-2">
                        <img src="/Assets/PlayStation-Logo.wine.png" className=" w-11 h-8" alt="logo"/>
                        <select name="" id="">
                            <option value="">Games</option>
                        </select>
                        <select name="" id="">
                            <option value="">PS5</option>
                        </select>
                        <select name="" id="">
                            <option value="">PS4</option>
                        </select>
                        <select name="" id="">
                            <option value="">Services</option>
                        </select>
                        <select name="" id="">
                            <option value="">Accessories</option>
                        </select>
                        <select name="" id="">
                            <option value="">News</option>
                        </select>
                        <select name="" id="">
                            <option value="">Store</option>
                        </select>
                        <select name="" id="">
                            <option value="">Support</option>
                        </select>
                    </div>

                    <div className="button flex items-center space-x-5 p-2">
                        <button className=" bg-[#0070D1] text-white w-20 rounded-full h-6 text-[15px]">Sign In</button>
                        <img src="/Assets/search.png" className=" w-6 h-6" alt="Logo" />
                    </div>
                </nav>

                {/* Nav-2 */}
                <nav className=" text-black font-semibold flex p-5 shadow-xl">
                    <img src="/Assets/Store logo.png" className="w-5 h-6" alt="" />
                    <h1 className=" text-lg">PlayStation Store</h1>
                    <div className="flex ml-96 space-x-8">
                        <NavLink to={"/"} className=" hover:bg-[#CED5DA] rounded-full w-16 flex items-center justify-center">Latest</NavLink>
                        <NavLink to={"/collections"}>Collections</NavLink>
                        <NavLink>Deals</NavLink>
                        <NavLink>Subscriptions</NavLink>
                        <NavLink>Browse</NavLink>
                    </div>
                </nav>
        </>
    )
}

export default NavBar