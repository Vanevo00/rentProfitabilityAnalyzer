import { RealEstateWebsite as RealEstateWebsiteType } from '../../types/RealEstateWebsite'
import { RealEstateWebsiteService } from '../../services/RealEstateWebsite'

const realEstateWebsiteService = new RealEstateWebsiteService()

export default {
  Query: {
    getRealEstateWebsites: async (): Promise<RealEstateWebsiteType[]> => await realEstateWebsiteService.find()
  },
  Mutation: {
    addRealEstateWebsite: async (_, args): Promise<RealEstateWebsiteType> => await realEstateWebsiteService.create(_, args)
  }
}
