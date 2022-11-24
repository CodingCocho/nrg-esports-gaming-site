import {Link} from 'react-router-dom';

export const Communities = (): JSX.Element =>
{
  return (
    <>
      <div 
      className="page bg-black py-8 pl-4 md:pl-12 lg:pl-20 flex flex-col"
      >
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl"
        to="/communities/apex"
        >
          APEX LEGENDS
        </Link>
        <Link
        className="text-gray-400 font-black hover:text-white h-fit w-fit text-4xl"
        to="/communities/fortnite"
        >
          FORTNITE
        </Link>
        <Link
        to="/communities/variety"
        >
          VARIETY
        </Link>
        <Link
        to="/communities/overwatch"
        >
          OVERWATCH
        </Link>
        <Link
        to="/communities/rocket-league"
        >
          ROCKET LEAGUE
        </Link>
        <Link
        to="/communities/valorant"
        >
          VALORANT
        </Link>
      </div>
    </>
  )
}