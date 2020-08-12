import { City } from './City'
import { Neighbourhood } from './Neighbourhood'

export interface Flat extends Document {
  _id: string
  address: string
  squareMeters: number
  priceCZK: number
  city: City
  dispositions?: string
  link?: string
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
