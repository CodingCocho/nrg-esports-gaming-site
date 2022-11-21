import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import NRGLogo from '../assets/nrg-logo.png';

export const Navbar = (): JSX.Element =>
{
  const [open, setOpen] = useState<boolean>(false);

  const openNavbar = () =>
  {
    const navElement = document.getElementById('nav-container');
    if(!open)
    {
      if( navElement)
      {
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
    setOpen(!open);
  }

  return (
    <>
      <div 
      className="navbar bg-base-100 px-8 pt-10 pb-6 justify-between z-20 relative"
      >
        <img 
        alt="black-logo"
        className="w-[125px] h-[30px]" 
        src={NRGLogo}
        />
        <button 
        className="btn btn-square btn-ghost"
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
      <div 
      className="w-screen p-6 flex flex-col text-center absolute top-[-220px] z-10 duration-300 bg-base-100"
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


