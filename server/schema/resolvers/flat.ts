import { Flat as FlatType } from '../../types/Flat'
import { FlatService } from '../../services/Flat'
import { DefaultPaginator } from '../../types/Paginator'
import { DefaultSorting } from '../../types/Sorting'
import PaginationAndSorting from '../../types/PaginationAndSorting'

const flatService = new FlatService()

export default {
  Query: {
    getFlats: async (
      _,
      args: PaginationAndSorting
    ): Promise<FlatType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await flatService.find(paginator, sorting)
    }
  },
  Mutation: {
    addFlat: async (_, args): Promise<FlatType> => await flatService.create(_, args)
  }
}
