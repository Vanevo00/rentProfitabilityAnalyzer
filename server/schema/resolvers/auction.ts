import { Auction as AuctionType } from '../../types/Auction'
import { AuctionService } from '../../services/Auction'
import { DefaultPaginator, Paginator } from '../../types/Paginator'
import { Sorting } from '../../types/Sorting'

const auctionService = new AuctionService()

interface AuctionArgs {
  paginator: Paginator
  sorting: Sorting
}

export default {
  Query: {
    getAuctions: async (
      _,
      args: AuctionArgs
    ): Promise<AuctionType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting
      } = args

      return await auctionService.find(paginator, sorting)
    }
  },
  Mutation: {
    addAuction: async (_, args): Promise<AuctionType> => await auctionService.create(_, args)
  }
}
