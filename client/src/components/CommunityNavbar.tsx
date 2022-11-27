import {NavLink} from 'react-router-dom';

export const CommunitiesNavbar = (): JSX.Element =>
{
  return (
    <>
      <div 
      className="w-screen bg-black pt-8 pb-8"
      id="container"
      >
        <div 
        className="grid grid-cols-2 max-w-[900px] w-[350px] mx-auto gap-2 md:grid-cols-3 lg:grid-cols-6 lg:w-[900px]"
        id="navbar"
        >
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/apex"
          >
            APEX LEGENDS
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/fortnite"
          >
            FORTNITE
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/variety"
          >
            VARIETY
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/overwatch"
          >
            OVERWATCH
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/rocket-league"
          >
            ROCKET LEAGUE
          </NavLink>
          <NavLink
          className={({isActive}): string => "text-center font-black py-2  " + (isActive ? "bg-white text-neutral" : "hover:text-white text-gray-400")}
          to="/communities/valorant"
          >
            VALORANT
          </NavLink>
        </div>
      </div>
    </>
  )
}