import { DistrictService } from '../../services/District'
import { District as DistrictType } from '../../types/District'

const countyService = new DistrictService()

export default {
  Mutation: {
    addDistrict: async (_, args): Promise<DistrictType> => await countyService.create(_, args)
  }
}
