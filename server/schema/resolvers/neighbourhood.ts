import { NeighbourhoodService } from '../../services/Neighbourhood'
import { Neighbourhood as NeighbourhoodType } from '../../types/Neighbourhood'
import { DefaultPaginator } from '../../types/Paginator'
import { DefaultSorting } from '../../types/Sorting'
import PaginationAndSorting from '../../types/PaginationAndSorting'

const neighbourhoodService = new NeighbourhoodService()

export default {
  Query: {
    getNeighbourhoods: async (
      _,
      args: PaginationAndSorting
    ): Promise<NeighbourhoodType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await neighbourhoodService.find(paginator, sorting)
    }
  },
  Mutation: {
    addNeighbourhood: async (_, args: any): Promise<NeighbourhoodType> => await neighbourhoodService.create(_, args)
  }
}
