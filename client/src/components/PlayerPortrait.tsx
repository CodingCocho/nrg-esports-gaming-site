import {PortraitProps} from '../interfaces/CommunityInterfaces';

export const PlayerPortrait = (props: PortraitProps): JSX.Element =>
{

  // Deconstruct the props
  const {name, portrait, social} = props;

  return (
    <>

      {/* Hold the container of the portrait */}
      <div 
      className="relative w-full flex justify-center items-center"
      id="portrait-container"
      >

        {/* Wrap the image with the hyperlink to their Twitter */}
        <a 
        href={social}
        >

          {/* Hold the player image */}
          <img   
          alt=""
          className="grayscale relative hover:grayscale-0"
          id="portrait"
          src={portrait} 
          />
        </a>

        {/* Hold the player name */}
        <p
        className="absolute bottom-0 left-0 block pl-4 py-4 text-3xl xl:text-6xl text-white font-black lg:-tracking-[.1rem]" 
        id="player-name"
        >
          {name}
        </p>
      </div>
    </>
  )
}