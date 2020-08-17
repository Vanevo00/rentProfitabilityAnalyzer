import { RealEstateLink as RealEstateLinkType } from '../../types/RealEstateLink'
import { RealEstateLinkService } from '../../services/RealEstateLink'
import { Paginator } from '../../types/Paginator'

const realEstateLinkService = new RealEstateLinkService()

export default {
  Query: {
    getRealEstateLinks: async (
      _,
      paginator: Paginator
    ): Promise<RealEstateLinkType[]> => await realEstateLinkService.find(paginator)
  },
  Mutation: {
    addRealEstateLink: async (_, args): Promise<RealEstateLinkType> => await realEstateLinkService.create(_, args)
  }
}
