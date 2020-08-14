import { UserService } from '../../services/User'
import { User as UserType } from '../../types/User'

const userService = new UserService()

export default {
  Query: {
    getUsers: async (): Promise<UserType[]> => await userService.find()
  },
  Mutation: {
    registerUser: async (_, args): Promise<UserType> => await userService.register(_, args)
  }
}
