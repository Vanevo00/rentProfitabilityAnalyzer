import { District } from '../models'
import { District as DistrictType } from '../types/District'
import { County as CountyType } from '../types/County'

export class DistrictService {
  async findOne (args): Promise<CountyType> {
    try {
      return await District.findOne(args)
    } catch (err) {
      console.error(err)
    }
  }

  async create (args): Promise<DistrictType> {
    try {
      return await District.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
