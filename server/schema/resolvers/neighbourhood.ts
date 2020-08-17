import { NeighbourhoodService } from '../../services/Neighbourhood'
import { Neighbourhood as NeighbourhoodType } from '../../types/Neighbourhood'
import { Paginator } from '../../types/Paginator'

const neighbourhoodService = new NeighbourhoodService()

export default {
  Query: {
    getNeighbourhoods: async (
      _,
      paginator: Paginator
    ): Promise<NeighbourhoodType[]> => await neighbourhoodService.find(paginator)
  },
  Mutation: {
    addNeighbourhood: async (_, args: any): Promise<NeighbourhoodType> => await neighbourhoodService.create(_, args)
  }
}
