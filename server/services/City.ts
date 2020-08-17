import { City } from '../models'
import { City as CityType } from '../types/City'
import { Paginator } from '../types/Paginator'

export class CityService {
  async find (
    paginator: Paginator
  ): Promise<CityType[]> {
    const {
      size = 30,
      page = 1,
      offset = 0
    } = paginator.paginator

    return await City
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
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
