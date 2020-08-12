import { CityService } from '../../services/City'
import { City as CityType } from '../../types/City'

const cityService = new CityService()

export default {
  Query: {
    getCities: async (): Promise<CityType[]> => await cityService.find()
  },
  Mutation: {
    addCity: async (_, args): Promise<CityType> => await cityService.create(_, args)
  }
}
