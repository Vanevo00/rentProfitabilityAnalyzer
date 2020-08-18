import { Auction as AuctionType } from '../../types/Auction'
import { AuctionService } from '../../services/Auction'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const auctionService = new AuctionService()

interface AuctionArgs {
  paginator: Paginator
}

export default {
  Query: {
    getAuctions: async (
      _,
      args: AuctionArgs
    ): Promise<AuctionType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await auctionService.find(paginator)
    }
  },
  Mutation: {
    addAuction: async (_, args): Promise<AuctionType> => await auctionService.create(_, args)
  }
}
