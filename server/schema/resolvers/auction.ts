import { Auction as AuctionType } from '../../types/Auction'
import { AuctionService } from '../../services/Auction'
import { DefaultPaginator, Paginator } from '../../types/Paginator'
import { DefaultSorting, Sorting } from '../../types/Sorting'
import PaginationAndSorting from '../../types/PaginationAndSorting'

const auctionService = new AuctionService()

export default {
  Query: {
    getAuctions: async (
      _,
      args: PaginationAndSorting
    ): Promise<AuctionType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await auctionService.find(paginator, sorting)
    }
  },
  Mutation: {
    addAuction: async (_, args): Promise<AuctionType> => await auctionService.create(_, args)
  }
}
