import { City } from '../models'
import { City as CityType } from '../types/City'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class CityService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<CityType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await City
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('county')
      .populate('district')
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
