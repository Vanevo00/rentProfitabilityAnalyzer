import { RealEstateLink as RealEstateLinkType } from '../../types/RealEstateLink'
import { RealEstateLinkService } from '../../services/RealEstateLink'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const realEstateLinkService = new RealEstateLinkService()

interface RealEstateLinksArgs {
  paginator: Paginator
}

export default {
  Query: {
    getRealEstateLinks: async (
      _,
      args: RealEstateLinksArgs
    ): Promise<RealEstateLinkType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await realEstateLinkService.find(paginator)
    }
  },
  Mutation: {
    addRealEstateLink: async (_, args): Promise<RealEstateLinkType> => await realEstateLinkService.create(_, args)
  }
}
