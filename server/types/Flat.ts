import { City } from './City'
import { Neighbourhood } from './Neighbourhood'

export interface Flat {
  _id: string
  address: string
  squareMeters: number
  priceCZK: number
  nearbyPurchases?: {
    address: string
    squareMeters: string
    pricePerMeter: number
  }[]
  city: City
  dispositions?: string
  links?: string[]
  mainImage?: string
  floor?: number
  lift?: boolean
  agency?: string
  contact?: string
  ownershipType?: string
  monthlyExpensesAssociation?: number
  monthlyExpensesOther?: number
  parking?: boolean
  balcony?: boolean
  garden?: boolean
  heating?: string
  publicTransport?: string
  mortgaged?: boolean
  notes?: string
  neighbourhood?: Neighbourhood
  created?: string
  updated?: string
}
