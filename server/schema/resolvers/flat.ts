import { Flat as FlatType } from '../../types/Flat'
import { FlatService } from '../../services/Flat'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const flatService = new FlatService()

interface FlatArgs {
  paginator: Paginator
}

export default {
  Query: {
    getFlats: async (
      _,
      args: FlatArgs
    ): Promise<FlatType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await flatService.find(paginator)
    }
  },
  Mutation: {
    addFlat: async (_, args): Promise<FlatType> => await flatService.create(_, args)
  }
}
