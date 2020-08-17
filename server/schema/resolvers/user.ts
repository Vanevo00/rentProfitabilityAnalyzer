import { UserService } from '../../services/User'
import { User as UserType } from '../../types/User'
import { Paginator } from '../../types/Paginator'

const userService = new UserService()

export default {
  Query: {
    getUsers: async (
      _,
      paginator: Paginator
    ): Promise<UserType[]> => await userService.find(paginator)
  },
  Mutation: {
    registerUser: async (_, args): Promise<UserType> => await userService.register(_, args)
  }
}
