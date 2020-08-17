import { Rent } from '../models'
import { Rent as RentType } from '../types/Rent'
import { Paginator } from '../types/Paginator'

export class RentService {
  async find (
    paginator: Paginator
  ): Promise<RentType[]> {
    const {
      size = 30,
      page = 1,
      offset = 0
    } = paginator.paginator

    return await Rent
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
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
