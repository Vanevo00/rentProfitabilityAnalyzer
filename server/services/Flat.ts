import { Flat } from '../models'
import { Flat as FlatType } from '../types/Flat'
import { Paginator } from '../types/Paginator'

export class FlatService {
  async find (
    paginator: Paginator
  ): Promise<FlatType[]> {
    const {
      paginator: {
        size = 30,
        page = 1,
        offset = 0
      } = {}
    } = paginator

    return await Flat
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
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
