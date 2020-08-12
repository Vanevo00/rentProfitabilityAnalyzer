import { City } from '../models'
import { City as CityType } from '../types/City'

export class CityService {
  async find (): Promise<CityType[]> {
    return await City.find({}).exec()
  }

  async create (_, args): Promise<CityType> {
    try {
      const popularity = args.popularity || 0
      return await City.create({
        ...args,
        popularity
      })
    } catch (err) {
      console.error(err)
    }
  }
}
