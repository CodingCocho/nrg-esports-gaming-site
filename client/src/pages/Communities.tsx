import {Link} from 'react-router-dom';

export const Communities = (): JSX.Element =>
{
  return (
    <>
      
      {/* Hold the container for the page */}
      <div 
      className="page bg-black py-8 pl-4 md:pl-12 lg:pl-20 flex flex-col"
      >

        {/* Hold a link to each community */}
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl"
        to="/communities/apex"
        >
          APEX LEGENDS
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl mt-4"
        to="/communities/fortnite"
        >
          FORTNITE
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl mt-4"
        to="/communities/variety"
        >
          VARIETY
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl mt-4 "
        to="/communities/overwatch"
        >
          OVERWATCH
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl mt-4"
        to="/communities/rocket-league"
        >
          ROCKET LEAGUE
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl md:text-6xl lg:text-8xl mt-4"
        to="/communities/valorant"
        >
          VALORANT
        </Link>
      </div>
    </>
  )
}