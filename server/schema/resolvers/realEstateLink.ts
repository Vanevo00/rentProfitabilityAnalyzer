import { RealEstateLink as RealEstateLinkType } from '../../types/RealEstateLink'
import { RealEstateLinkService } from '../../services/RealEstateLink'

const realEstateLinkService = new RealEstateLinkService()

export default {
  Query: {
    getRealEstateLinks: async (): Promise<RealEstateLinkType[]> => await realEstateLinkService.find()
  },
  Mutation: {
    addRealEstateLink: async (_, args): Promise<RealEstateLinkType> => await realEstateLinkService.create(_, args)
  }
}
