import { City } from './City'
import { Neighbourhood } from './Neighbourhood'

export interface Auction {
  _id: string
  address?: string
  squareMeters?: number
  startingPriceCZK: number
  estimatedPriceCZK?: number
  startingPricePerMeter?: number
  estimatedPricePerMeter?: number
  minimalBidCZK?: number
  depositCZK?: number
  nearbyPurchases?: {
    address: string
    squareMeters: string
    pricePerMeter: number
  }[]
  dispositions?: string
  city: City
  neighbourhood?: Neighbourhood
  voluntary?: boolean
  starts?: string
  auctioneer?: string
  mainImage?: string
  links?: string[]
  created?: string
  updated?: string
}
