import { Auction } from '../models'
import { Auction as AuctionType } from '../types/Auction'
import { Paginator } from '../types/Paginator'

export class AuctionService {
  async find (
    paginator: Paginator
  ): Promise<AuctionType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await Auction
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
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
