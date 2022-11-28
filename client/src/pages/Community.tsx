import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify'
import {CommunitiesNavbar} from '../components/CommunityNavbar';
import {CommunityPlayerGallery} from '../components/CommunityPlayerGallery';
import {CommunityDataState} from '../interfaces/CommunityInterfaces';
import ApexData from '../json/apex.json';
import FortniteData from '../json/fortnite.json';
import OverwatchData from '../json/overwatch.json';
import RocketLeagueData from '../json/rocket-league.json';
import ValorantData from '../json/valorant.json';
import VarietyData from '../json/variety.json';

export const Community = (): JSX.Element =>
{

  // Hold the state of the data for the gallery
  const [galleryData, setGalleryData] = useState<CommunityDataState | undefined>();
  
  // Hold the loading state
  const [loading, setLoading] = useState<boolean>(true);

  // Hold the useParams hook
  const params = useParams();

  // On mount retrieve the appropraite JSON data
  useEffect(() => 
  {
    if(params.community) setCommunityData(params.community);
    setLoading(false);

    // On dismount undefine the gallery data
    return() =>
    {
      setGalleryData(undefined);
      setLoading(true);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.community])
  
  // Page functions
  
  /*
  Retrieve the appropraite JSON data based based on the params.
  @params community the gaming community that is being retrieved
  @return none
  */
 const setCommunityData = (community: string): void =>
 {

  // Hold the JSON data
  let data: CommunityDataState | undefined;
  
  // Determine which community data to retrieve
  switch(community)
  {
    case 'apex':
      data = {data: ApexData};
      break;

    case 'fortnite':
      data = {data: FortniteData};
      break;

    case 'variety':
      data = {data: VarietyData};
      break;

    case 'overwatch':
      data = {data: OverwatchData};
      break;

    case 'rocket-league':
      data = {data: RocketLeagueData};
      break;
    
    case 'valorant':
      data = {data: ValorantData};
      break;
    
    default:
      toast.error('Could not load community data', {theme: 'colored'});
      break;
  }

  // Set the gallery data state
  setGalleryData(data);
 }

  return (
    <>

      {/* Hold the container for the page */}
      <div 
      className="page bg-black flex flex-col items-center"
      >
        <CommunitiesNavbar />

        {/* Conditional render the gallery when we have gallery data */}
        {galleryData && 
        !loading &&
        <CommunityPlayerGallery 
        data={galleryData}
        />}
      </div>
    </>
  )
}