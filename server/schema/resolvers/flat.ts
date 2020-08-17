import { Flat as FlatType } from '../../types/Flat'
import { FlatService } from '../../services/Flat'
import { Paginator } from '../../types/Paginator'

const flatService = new FlatService()

export default {
  Query: {
    getFlats: async (
      _,
      paginator: Paginator
    ): Promise<FlatType[]> => await flatService.find(_, paginator)
  },
  Mutation: {
    addFlat: async (_, args): Promise<FlatType> => await flatService.create(_, args)
  }
}
