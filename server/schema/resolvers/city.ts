import { CityService } from '../../services/City'
import { City as CityType } from '../../types/City'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const cityService = new CityService()

interface CityArgs {
  paginator: Paginator
}

export default {
  Query: {
    getCities: async (
      _,
      args: CityArgs
    ): Promise<CityType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await cityService.find(paginator)
    }
  },
  Mutation: {
    addCity: async (_, args): Promise<CityType> => await cityService.create(_, args)
  }
}
