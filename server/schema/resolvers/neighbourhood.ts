import { Neighbourhood } from '../../models'

export default {
  Query: {
    getNeighbourhoods: async () => await Neighbourhood.find({}).populate('city').exec()
  },
  Mutation: {
    addNeighbourhood: async (_, args: any) => {
      try {
        return await Neighbourhood.create(args)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
