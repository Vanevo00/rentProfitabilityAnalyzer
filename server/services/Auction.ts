import { Auction } from '../models'
import { Auction as AuctionType } from '../types/Auction'

export class AuctionService {
  async find (): Promise<AuctionType[]> {
    return await Auction
      .find({})
      .populate('city')
      .populate('neighbourhood')
  }

  async create (_, args): Promise<AuctionType> {
    try {
      const preparedAuction = this.prepareAuction(args)
      return await Auction.create(preparedAuction)
    } catch (err) {
      console.error(err)
    }
  }

  prepareAuction (args) {
    try {
      const {
        squareMeters,
        startingPriceCZK,
        estimatedPriceCZK,
        starts
      } = args

      const startingPricePerMeter = squareMeters && startingPriceCZK ? Math.floor(startingPriceCZK / squareMeters) : undefined
      const estimatedPricePerMeter = squareMeters && estimatedPriceCZK ? Math.floor(estimatedPriceCZK / squareMeters) : undefined
      const convertedStarts = new Date(starts)

      return {
        ...args,
        startingPricePerMeter,
        estimatedPricePerMeter,
        starts: convertedStarts
      }
    } catch (err) {
      console.error(err)
    }
  }
}
