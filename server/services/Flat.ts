import { Flat } from '../models'
import { Flat as FlatType } from '../types/Flat'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class FlatService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<FlatType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await Flat
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('city')
      .populate('neighbourhood')
  }

  async create (_, args): Promise<FlatType> {
    try {
      const preparedFlat = this.prepareFlat(args)
      return await Flat.create(preparedFlat)
    } catch (err) {
      console.error(err)
    }
  }

  prepareFlat (args) {
    const {
      squareMeters,
      priceCZK
    } = args

    return {
      ...args,
      pricePerMeter: Math.floor(priceCZK / squareMeters)
    }
  }
}
