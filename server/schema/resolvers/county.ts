import { CountyService } from '../../services/County'
import { County as CountyType } from '../../types/County'

const countyService = new CountyService()

export default {
  Query: {
    findCountyByName: async (
      _,
      args: { name: string }
    ): Promise<CountyType> => {
      const {
        name
      } = args

      return await countyService.findOne({ name })
    }
  },
  Mutation: {
    addCounty: async (_, args): Promise<CountyType> => await countyService.create(args)
  }
}
