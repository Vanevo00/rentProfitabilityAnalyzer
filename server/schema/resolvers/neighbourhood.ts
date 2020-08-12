import { NeighbourhoodService } from '../../services/Neighbourhood'
import { Neighbourhood as NeighbourhoodType } from '../../types/Neighbourhood'

const neighbourhoodService = new NeighbourhoodService()

export default {
  Query: {
    getNeighbourhoods: async (): Promise<NeighbourhoodType[]> => await neighbourhoodService.find()
  },
  Mutation: {
    addNeighbourhood: async (_, args: any): Promise<NeighbourhoodType> => await neighbourhoodService.create(_, args)
  }
}
