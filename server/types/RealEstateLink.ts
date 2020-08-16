import { RealEstateWebsite } from './RealEstateWebsite'

export interface RealEstateLink {
  link: string
  scraped: boolean
  website: RealEstateWebsite
}
