import { RealEstateWebsite as RealEstateWebsiteType } from '../../types/RealEstateWebsite'
import { RealEstateWebsiteService } from '../../services/RealEstateWebsite'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const realEstateWebsiteService = new RealEstateWebsiteService()

interface RealEstateWebsiteArgs {
  paginator: Paginator
}

export default {
  Query: {
    getRealEstateWebsites: async (
      _,
      args: RealEstateWebsiteArgs
    ): Promise<RealEstateWebsiteType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await realEstateWebsiteService.find(paginator)
    }
  },
  Mutation: {
    addRealEstateWebsite: async (_, args): Promise<RealEstateWebsiteType> => await realEstateWebsiteService.create(_, args)
  }
}
