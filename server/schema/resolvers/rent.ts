import { Rent as RentType } from '../../types/Rent'
import { RentService } from '../../services/Rent'
import { Paginator } from '../../types/Paginator'

const rentService = new RentService()

export default {
  Query: {
    getRents: async (
      _,
      paginator: Paginator
    ): Promise<RentType[]> => await rentService.find(paginator)
  },
  Mutation: {
    addRent: async (_, args): Promise<RentType> => await rentService.create(_, args)
  }
}
