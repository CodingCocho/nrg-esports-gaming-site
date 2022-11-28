/*
name: string the name of the player
portrait: string the url of the player image
social: string the url to the player's Twitter
*/
export interface PortraitProps
{
  name: string,
  portrait: string,
  social: string
}

/*
data: PortraitProps[] the JSON data of each player
*/
export interface CommunityDataState
{
  data: PortraitProps[]
}

/*
data: CommunityDataState the state of the JSON data
*/
export interface GalleryProps
{
  data: CommunityDataState
}
