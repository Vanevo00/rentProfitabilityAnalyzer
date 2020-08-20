import { District } from '../models'
import { District as DistrictType } from '../types/District'

export class DistrictService {
  async create (_, args): Promise<DistrictType> {
    try {
      return await District.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
