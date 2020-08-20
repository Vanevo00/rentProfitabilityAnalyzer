import { District } from './District'
import { County } from './County'

export interface City extends Document {
  _id: string
  name: string
  country: string
  county: County
  district: District
  population: number
  mainImageLink?: string
}
