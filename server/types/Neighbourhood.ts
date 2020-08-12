import { City } from './City'

export interface Neighbourhood extends Document {
  _id: string
  name: string
  city: City
}
