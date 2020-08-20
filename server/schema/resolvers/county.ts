import { CountyService } from '../../services/County'
import { County as CountyType } from '../../types/County'

const countyService = new CountyService()

export default {
  Mutation: {
    addCounty: async (_, args): Promise<CountyType> => await countyService.create(_, args)
  }
}
