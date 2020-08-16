import { Flat as FlatType } from '../../types/Flat'
import { FlatService } from '../../services/Flat'

const flatService = new FlatService()

export default {
  Query: {
    getFlats: async (): Promise<FlatType[]> => await flatService.find()
  },
  Mutation: {
    addFlat: async (_, args): Promise<FlatType> => await flatService.create(_, args)
  }
}
