import {PlayerPortrait} from './PlayerPortrait';
import {GalleryProps, PortraitProps} from '../interfaces/CommunityInterfaces'

export const CommunityPlayerGallery = (props: GalleryProps): JSX.Element =>
{
  const {data} = props;
  console.log(data);
  return (
    <>
      <div 
      className="w-full px-2 bg-black grid grid-col-1 gap-y-4"
      id="gallery"
      >
        {data.data.map((playerData: PortraitProps, index: number): JSX.Element =>
        {
          return (
            <>
              <PlayerPortrait
              name={playerData.name}
              portrait={playerData.portrait}
              />
            </>
          )
        })}
      </div>
    </>
  )
}