import { DistrictService } from '../../services/District'
import { District as DistrictType } from '../../types/District'
const districtService = new DistrictService()

export default {
  Query: {
    findDistrictByName: async (
      _,
      args: { name: string }
    ): Promise<DistrictType> => {
      const {
        name
      } = args

      return await districtService.findOne({ name })
    }
  },
  Mutation: {
    addDistrict: async (_, args): Promise<DistrictType> => await districtService.create(args)
  }
}
