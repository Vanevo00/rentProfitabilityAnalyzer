import { UserService } from '../../services/User'
import { User as UserType } from '../../types/User'
import { DefaultPaginator } from '../../types/Paginator'
import PaginationAndSorting from '../../types/PaginationAndSorting'
import { DefaultSorting } from '../../types/Sorting'

const userService = new UserService()

export default {
  Query: {
    getUsers: async (
      _,
      args: PaginationAndSorting
    ): Promise<UserType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await userService.find(paginator, sorting)
    }
  },
  Mutation: {
    registerUser: async (_, args): Promise<UserType> => await userService.register(_, args)
  }
}
