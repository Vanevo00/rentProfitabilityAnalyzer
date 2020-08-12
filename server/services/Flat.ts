import { Flat } from '../models'
import { Flat as FlatType } from '../types/Flat'

export class FlatService {
  async find (): Promise<FlatType[]> {
    return await Flat.find({}).populate('city').populate('neighbourhood').exec()
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
      pricePerMeter: priceCZK / squareMeters
    }
  }
}
