import { County } from '../models'
import { County as CountyType } from '../types/County'

export class CountyService {
  async findOne (args): Promise<CountyType> {
    try {
      return await County.findOne(args)
    } catch (err) {
      console.error(err)
    }
  }

  async create (args): Promise<CountyType> {
    try {
      return await County.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
