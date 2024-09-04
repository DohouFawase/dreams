import { NavLink } from "react-router-dom";
import { FaBars , FaTimes} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, SetOpen] = useState(false);

  function Drop() {
    SetOpen(!open);
  }

  return (
    <>
      <header className=" bg-white px-10 py-4 text-blue-400">
        <div className="">
          <div className="flex justify-between">
            <div className="flex gap-10 items-center">
              <NavLink >
                <img src="/imgs/WeHAD.png" alt="" className={"w-34 h-10"} />
              </NavLink>
            </div>
            <div className="flex md:hidden absolute right-[0.5rem]">
            {open ? (
                <FaTimes size={25} onClick={Drop} />
              ) : (
                <FaBars size={25} onClick={Drop} />
              )}
            </div>
            <ul
              className={`flex flex-col md:flex-row items-center gap-y-12 md:gap-5 transition-all duration-300 ease-in-out bg-backgroundConstract md:bg-transparent w-full h-screen md:w-auto  md:h-auto absolute md:static left-0 top-[3rem] md:top-0 z-10 ${
                open ? "block" : "hidden"
              } md:flex`}
            >
              <li>
                <NavLink
                to={"/"}
                className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending " : "",
                    isActive ? "active active text-yellow-600" : "hover:text-yellow-400",
                    // isActive ? "active active text-yellow-600" : "",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
                  //  className={({ isActive }) => (isActive ? 'active text-yellow-600' : '')}
                
                >Accueil</NavLink>
              </li>
              <li>
          
                <NavLink to={"/programme"}
                 className={({ isActive, isPending, isTransitioning }) =>
                  [
                    isPending ? "pending" : "",
                    isActive ? "active active text-yellow-600" : "hover:text-yellow-400",
                    isTransitioning ? "transitioning" : "",
                  ].join(" ")
                }
                  //  className={({ isActive }) => (isActive ? 'active text-yellow-600' : '')}
                
                >Programme</NavLink>
              </li>
              <li>
                <NavLink 
                   className={({ isActive }) => (isActive ? 'active text-yellow-600' : '')}

                to={"/presentation"}>Presentation</NavLink>
              </li>
              <li>
                <NavLink 
                   className={({ isActive }) => (isActive ? 'active text-yellow-600' : '')}

                to={"/sponsor"}>Sponsoring</NavLink>
              </li>
              <li>
                <NavLink>J'y serai</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
