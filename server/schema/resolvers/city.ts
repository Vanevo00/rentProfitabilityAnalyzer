import { CityService } from '../../services/City'
import { City as CityType } from '../../types/City'
import { DefaultPaginator, Paginator } from '../../types/Paginator'
import { DefaultSorting } from '../../types/Sorting'
import PaginationAndSorting from '../../types/PaginationAndSorting'

const cityService = new CityService()

export default {
  Query: {
    getCities: async (
      _,
      args: PaginationAndSorting
    ): Promise<CityType[]> => {
      const {
        paginator = DefaultPaginator,
        sorting = DefaultSorting
      } = args

      return await cityService.find(paginator, sorting)
    }
  },
  Mutation: {
    addCity: async (_, args): Promise<CityType> => await cityService.create(_, args)
  }
}
