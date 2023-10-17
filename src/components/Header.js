import { useState } from "react";
import '../App.css';
const Header = () =>{ 

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

   

    const navLinks= [ 
            {   
                path:"/accueil",
                links:"Accueil"
            },
            {   
                path:"#clients",
                links:"Clients"
            },
            {   
                path:"#services",
                links:"Services"
            },
            {   
                path:"/portfolio",
                links:"Portfolio"
            },
            {   
                path:"#contact",
                links:"Contact"
            },

    ];





    return (  
        <div className="sticky top-0 z-10 w-full">
            <div className="px-8 flex justify-between border-b-2 w-full h-[13vh] bg-white">
                <div className="logo-container">
                    <a href="t" className="h-max w-max">
                        <img src="https://sikkagroupe.com/wp-content/uploads/2021/08/SIKKA-01.png" className="h-[95px] md:h-[80px] w-auto" alt="" />
                    </a>
                </div>
                <div className="top-navigation flex items-center   lg:w-max lg:h-full ">
                    <nav className="top-menu-nav hidden  lg:block ">
                        <ul className="flex flex-rows justify-around gap-[40px]  font-bold text-zinc-400 text-md w-full">
                            { navLinks.map((link, index) =>(
                            <li className="py-2  hover:text-gray-100 hoverClass">
                                <a href={link.path}>
                                    {link.links}
                                </a>
                            </li>))}
                        </ul>
                    </nav>

                    {/* Mobile-menu */}

                    <div  className={`lg:hidden border border-2 rounded-sm w-max text-[#FC7B04] ${!nav ? "" : "linkActive" }`} onClick={handleClick}>
                        {
                            !nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                        }
                    </div>

                </div>
            </div>
            <div className={` lg:hidden flex justify-center  absolute z-10  w-full ${!nav ? "" :"h100Vh" } backdrop-blur-sm bg-white/30`}>
                <ul className={`w-[80%] h-max z-15 shadow-md rounded-md border-0  border-t-4 border-[#FC7B04]  px-5 text-left font-bold  bg-white ${!nav ? "none" : "block"}`}>
                    { navLinks.map((link, index) =>(
                        <li className="py-2 border-b hover:text-gray-100 hover:bg-blue-300">
                        <a href={link.path}>
                            {link.links}
                        </a>
                    </li>
                    ))
                    }
                   
                 

                </ul>
            </div>
            


        </div>        
    );
}
 
export default Header;