import { UserService } from '../../services/User'
import { User as UserType } from '../../types/User'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const userService = new UserService()

interface UserArgs {
  paginator: Paginator
}

export default {
  Query: {
    getUsers: async (
      _,
      args: UserArgs
    ): Promise<UserType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await userService.find(paginator)
    }
  },
  Mutation: {
    registerUser: async (_, args): Promise<UserType> => await userService.register(_, args)
  }
}
