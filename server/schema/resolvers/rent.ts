import { Rent as RentType } from '../../types/Rent'
import { RentService } from '../../services/Rent'

const rentService = new RentService()

export default {
  Query: {
    getRents: async (): Promise<RentType[]> => await rentService.find()
  },
  Mutation: {
    addRent: async (_, args): Promise<RentType> => await rentService.create(_, args)
  }
}
