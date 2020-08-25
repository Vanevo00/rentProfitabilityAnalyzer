import { User } from './User'

export interface UserActivation {
  _id: string
  activationCode: string
  user: User
  created: string
}
