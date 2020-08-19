import { RealEstateLink as RealEstateLinkType } from '../../types/RealEstateLink'
import { RealEstateLinkService } from '../../services/RealEstateLink'
import { DefaultPaginator } from '../../types/Paginator'
import PaginationAndSorting from '../../types/PaginationAndSorting'
import { DefaultSorting } from '../../types/Sorting'

const realEstateLinkService = new RealEstateLinkService()

export default {
  Query: {
    getRealEstateLinks: async (
      _,
      args: PaginationAndSorting
    ): Promise<RealEstateLinkType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await realEstateLinkService.find(paginator, sorting)
    }
  },
  Mutation: {
    addRealEstateLink: async (_, args): Promise<RealEstateLinkType> => await realEstateLinkService.create(_, args)
  }
}
