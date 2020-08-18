import { Rent as RentType } from '../../types/Rent'
import { RentService } from '../../services/Rent'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const rentService = new RentService()

interface RentArgs {
  paginator: Paginator
}

export default {
  Query: {
    getRents: async (
      _,
      args: RentArgs
    ): Promise<RentType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await rentService.find(paginator)
    }
  },
  Mutation: {
    addRent: async (_, args): Promise<RentType> => await rentService.create(_, args)
  }
}
