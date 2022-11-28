import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import NRGLogo from '../assets/nrg-logo.png';
import NRGLogo2 from '../assets/nrg-logo-black-2.png';

export const Navbar = (): JSX.Element =>
{

  // Hold the state of the navbar menu
  const [open, setOpen] = useState<boolean>(false);

  // Hold the useNavigate hook
  const navigate = useNavigate();

  // Component functions

  /*
  Open or close the navbar mobile menu based on the state.
  @param none
  @return none
  */
  const openNavbar = (): void =>
  {

    // Hold the element using React DOM
    const navElement = document.getElementById('nav-container');
    
    // Check the state
    if(!open)
    {

      // Allow TypeScript to detect element
      if(navElement)
      {

        // Apply the correct position of the mobile menu
        navElement.style.top = '110px';
      }
    }
    else
    {
      if(navElement)
      {
        navElement.style.top = '-220px';
      }
    }

    // Set the open state
    setOpen(!open);
  }

  return (
    <>

      {/* Hold the container for the navbar */}
      <div 
      className="navbar bg-base-100 px-8 pt-10 pb-6 justify-between z-20 relative lg:px-24"
      >

        {/* Hold the mobile logo */}
        <img 
        alt="black-logo"
        className="w-[125px] h-[30px] block lg:hidden cursor-pointer" 
        onClick={() => navigate('/')}
        src={NRGLogo}
        />

        {/* Hold the desktop logo */}
        <img 
        alt="black-logo"
        className="w-[125px] h-[50px] hidden lg:block cursor-pointer"
        onClick={() => navigate('/')} 
        src={NRGLogo2}
        />

        {/* Hold the desktop navlinks */}
        <div
        className="hidden lg:flex lg:items-center"
        id="links-desktop"
        >
          <NavLink     
          className={({isActive}): string => "text-lg block font-bold mr-4 " + (isActive ? "text-neutral" : "text-gray-400")}
          to="/"
          >
            Home
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-lg block font-bold mr-4 " + (isActive ? "text-neutral" : "text-gray-400")}
          to="/about"
          >
            About
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-lg block font-bold mr-4 " + (isActive ? "text-neutral" : "text-gray-400")}
          to="/communities"
          >
            Communities
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-lg block font-bold mr-4 " + (isActive ? "text-neutral" : "text-gray-400")}
          to="/partners"
          >
            Partners
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-lg block font-bold " + (isActive ? "text-neutral" : "text-gray-400")}
          to="/news"
          >
            News
          </NavLink>
        </div>

        {/* Hold the mobile menu button */}
        <button 
        className="btn btn-square btn-ghost lg:hidden"
        onClick={openNavbar}
        >
          <svg
          className="inline-block w-8 h-8 stroke-current" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          >
            <path
            d="M4 6h16M4 12h16M4 18h16" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            >
            </path>
          </svg>
        </button>
      </div>
      
      {/* Hold the mobile menu with the navlinks */}
      <div 
      className="w-screen p-6 flex flex-col text-center absolute top-[-220px] z-10 duration-300 bg-base-100 lg:hidden"
      id="nav-container"
      >
        <NavLink     
        className={({isActive}): string => "text-lg block font-bold " + (isActive ? "text-neutral" : "text-gray-400")}
        onClick={() => openNavbar()}
        to="/"
        >
          Home
        </NavLink>
        <NavLink
        className={({isActive}): string => "text-lg block font-bold mt-2 " + (isActive ? "text-neutral" : "text-gray-400")}
        onClick={() => openNavbar()}
        to="/about"
        >
          About
        </NavLink>
        <NavLink
        className={({isActive}): string => "text-lg block font-bold mt-2 " + (isActive ? "text-neutral" : "text-gray-400")}
        onClick={() => openNavbar()}
        to="/communities"
        >
          Communities
        </NavLink>
        <NavLink
        className={({isActive}): string => "text-lg block font-bold mt-2 " + (isActive ? "text-neutral" : "text-gray-400")}
        onClick={() => openNavbar()}
        to="/partners"
        >
          Partners
        </NavLink>
        <NavLink
        className={({isActive}): string => "text-lg block font-bold mt-2 " + (isActive ? "text-neutral" : "text-gray-400")}
        onClick={() => openNavbar()}
        to="/news"
        >
          News
        </NavLink>
      </div>
    </>
  )
}


