import {PortraitProps} from '../interfaces/CommunityInterfaces';

export const PlayerPortrait = (props: PortraitProps): JSX.Element =>
{
  const {name, portrait} = props;

  return (
    <>
      <div 
      className="relative w-full flex justify-center items-center"
      id="portrait-container"
      >
        <img   
        alt=""
        className="grayscale relative hover:grayscale-0"
        id="portrait"
        src={portrait} 
        />
        <p
        className="absolute bottom-0 left-0 block pl-4 py-4 text-4xl lg:text-6xl text-white font-black" 
        id="player-name"
        >
          {name}
        </p>
      </div>
    </>
  )
}