import { Auction as AuctionType } from '../../types/Auction'
import { AuctionService } from '../../services/Auction'

const auctionService = new AuctionService()

export default {
  Query: {
    getAuctions: async (): Promise<AuctionType[]> => await auctionService.find()
  },
  Mutation: {
    addAuction: async (_, args): Promise<AuctionType> => await auctionService.create(_, args)
  }
}
