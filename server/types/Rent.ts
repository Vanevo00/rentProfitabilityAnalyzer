import { City } from './City'
import { Neighbourhood } from './Neighbourhood'

export interface Rent extends Document {
  _id: string
  address: string
  squareMeters: number
  rentCZK: number
  rentPerMeter: number
  city: City
  neighbourhood?: Neighbourhood
  dispositions: string
  link?: string
  created: string
}
