import { Rent as RentType } from '../../types/Rent'
import { RentService } from '../../services/Rent'
import { DefaultPaginator } from '../../types/Paginator'
import { DefaultSorting } from '../../types/Sorting'
import PaginationAndSorting from '../../types/PaginationAndSorting'

const rentService = new RentService()

export default {
  Query: {
    getRents: async (
      _,
      args: PaginationAndSorting
    ): Promise<RentType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await rentService.find(paginator, sorting)
    }
  },
  Mutation: {
    addRent: async (_, args): Promise<RentType> => await rentService.create(_, args)
  }
}
