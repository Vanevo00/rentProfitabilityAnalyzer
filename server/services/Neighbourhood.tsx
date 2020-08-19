import { Neighbourhood } from '../models'
import { Neighbourhood as NeighbourhoodType } from '../types/Neighbourhood'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class NeighbourhoodService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<NeighbourhoodType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await Neighbourhood
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('city')
  }

  async create (_, args): Promise<NeighbourhoodType> {
    try {
      return await Neighbourhood.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
