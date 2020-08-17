import { Auction as AuctionType } from '../../types/Auction'
import { AuctionService } from '../../services/Auction'
import { Paginator } from '../../types/Paginator'

const auctionService = new AuctionService()

export default {
  Query: {
    getAuctions: async (
      _,
      paginator: Paginator
    ): Promise<AuctionType[]> => await auctionService.find(paginator)
  },
  Mutation: {
    addAuction: async (_, args): Promise<AuctionType> => await auctionService.create(_, args)
  }
}
