import { RealEstateWebsite as RealEstateWebsiteType } from '../../types/RealEstateWebsite'
import { RealEstateWebsiteService } from '../../services/RealEstateWebsite'
import { Paginator } from '../../types/Paginator'

const realEstateWebsiteService = new RealEstateWebsiteService()

export default {
  Query: {
    getRealEstateWebsites: async (
      _,
      paginator: Paginator
    ): Promise<RealEstateWebsiteType[]> => await realEstateWebsiteService.find(paginator)
  },
  Mutation: {
    addRealEstateWebsite: async (_, args): Promise<RealEstateWebsiteType> => await realEstateWebsiteService.create(_, args)
  }
}
