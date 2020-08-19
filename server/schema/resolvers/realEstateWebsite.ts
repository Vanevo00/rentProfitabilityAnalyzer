import { RealEstateWebsite as RealEstateWebsiteType } from '../../types/RealEstateWebsite'
import { RealEstateWebsiteService } from '../../services/RealEstateWebsite'
import { DefaultPaginator, Paginator } from '../../types/Paginator'
import PaginationAndSorting from '../../types/PaginationAndSorting'
import { DefaultSorting } from '../../types/Sorting'

const realEstateWebsiteService = new RealEstateWebsiteService()

export default {
  Query: {
    getRealEstateWebsites: async (
      _,
      args: PaginationAndSorting
    ): Promise<RealEstateWebsiteType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await realEstateWebsiteService.find(paginator, sorting)
    }
  },
  Mutation: {
    addRealEstateWebsite: async (_, args): Promise<RealEstateWebsiteType> => await realEstateWebsiteService.create(_, args)
  }
}
