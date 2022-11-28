import {PlayerPortrait} from './PlayerPortrait';
import {GalleryProps, PortraitProps} from '../interfaces/CommunityInterfaces'

export const CommunityPlayerGallery = (props: GalleryProps): JSX.Element =>
{

  // Deconstruct the props
  const {data} = props;

  return (
    <>

      {/* Hold the grid for the player portraits */}
      <div 
      className="bg-black grid grid-cols-1 gap-y-8 md:grid-cols-2 py-8 lg:grid-cols-3 px-4 md:px-14 lg:px-28 place-items-center md:gap-x-4 lg:gap-8 md:pb-14 lg:pb-28"
      id="gallery"
      >
        {data.data.map((playerData: PortraitProps, index: number): JSX.Element =>
        {
          return (
            <>
              <PlayerPortrait
              name={playerData.name}
              portrait={playerData.portrait}
              social={playerData.social}
              />
            </>
          )
        })}
      </div>
    </>
  )
}