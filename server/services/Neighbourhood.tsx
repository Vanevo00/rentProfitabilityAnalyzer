import { Neighbourhood } from '../models'
import { Neighbourhood as NeighbourhoodType } from '../types/Neighbourhood'

export class NeighbourhoodService {
  async find (): Promise<NeighbourhoodType[]> {
    return await Neighbourhood.find({}).populate('city')
  }

  async create (_, args): Promise<NeighbourhoodType> {
    try {
      return await Neighbourhood.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
