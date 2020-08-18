import { NeighbourhoodService } from '../../services/Neighbourhood'
import { Neighbourhood as NeighbourhoodType } from '../../types/Neighbourhood'
import { DefaultPaginator, Paginator } from '../../types/Paginator'

const neighbourhoodService = new NeighbourhoodService()

interface NeighbourhoodArgs {
  paginator: Paginator
}

export default {
  Query: {
    getNeighbourhoods: async (
      _,
      args: NeighbourhoodArgs
    ): Promise<NeighbourhoodType[]> => {
      const {
        paginator = DefaultPaginator
      } = args

      return await neighbourhoodService.find(paginator)
    }
  },
  Mutation: {
    addNeighbourhood: async (_, args: any): Promise<NeighbourhoodType> => await neighbourhoodService.create(_, args)
  }
}
