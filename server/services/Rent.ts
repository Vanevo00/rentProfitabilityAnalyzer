import { Rent } from '../models'
import { Rent as RentType } from '../types/Rent'

export class RentService {
  async find (): Promise<RentType[]> {
    return await Rent.find({})
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
