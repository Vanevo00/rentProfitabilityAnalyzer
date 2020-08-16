import { Flat } from './Flat'

export interface User extends Document {
  _id: string
  email: string
  password: string
  name?: string
  isAdmin: boolean
  activated: boolean
  favoriteFlats?: Flat[]
  created?: string
  udpated?: string
}
