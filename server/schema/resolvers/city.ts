import { CityService } from '../../services/City'
import { City as CityType } from '../../types/City'
import { Paginator } from '../../types/Paginator'

const cityService = new CityService()

export default {
  Query: {
    getCities: async (
      _,
      paginator: Paginator
    ): Promise<CityType[]> => await cityService.find(paginator)
  },
  Mutation: {
    addCity: async (_, args): Promise<CityType> => await cityService.create(_, args)
  }
}
