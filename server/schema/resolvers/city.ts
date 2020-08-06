import { City } from '../../models'

export default {
  Query: {
    getCities: async () => await City.find({}).exec()
  },
  Mutation: {
    addCity: async (_, args: any) => {
      try {
        const popularity = args.popularity || 0
        return await City.create({
          ...args,
          popularity
        })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
