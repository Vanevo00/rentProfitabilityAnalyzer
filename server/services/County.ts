import { County } from '../models'
import { County as CountyType } from '../types/County'

export class CountyService {
  async create (_, args): Promise<CountyType> {
    try {
      return await County.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
