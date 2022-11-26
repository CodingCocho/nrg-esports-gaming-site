import {PortraitProps} from '../interfaces/CommunityInterfaces';

export const PlayerPortrait = (props: PortraitProps): JSX.Element =>
{
  const {name, portrait} = props;

  return (
    <>
      <div 
      className="relative"
      id="portrait"
      >
        <img   
        alt=""
        className="grayscale relative hover:grayscale-0"
        id="portrait"
        src={portrait} 
        />
        <p
        className="absolute bottom-0 block pl-4 py-4 text-6xl text-white font-black" 
        id="player-name"
        >
          {name}
        </p>
      </div>
    </>
  )
}