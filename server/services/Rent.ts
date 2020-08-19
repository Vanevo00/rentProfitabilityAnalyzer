import { Rent } from '../models'
import { Rent as RentType } from '../types/Rent'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class RentService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<RentType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await Rent
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('city')
      .populate('neighbourhood')
  }

  async create (_, args): Promise<RentType> {
    try {
      const preparedRent = this.prepareRent(args)
      return await Rent.create(preparedRent)
    } catch (err) {
      console.error(err)
    }
  }

  prepareRent (args) {
    const {
      squareMeters,
      rentCZK
    } = args

    return {
      ...args,
      rentPerMeter: Math.floor(rentCZK / squareMeters)
    }
  }
}
