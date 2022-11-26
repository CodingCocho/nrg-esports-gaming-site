export interface CommunityDataState
{
  data: PortraitProps[]
}

export interface GalleryProps
{
  data: CommunityDataState
}

export interface PortraitProps
{
  name: string,
  portrait: string
}