import { RealEstateWebsite } from '../models'
import { RealEstateWebsite as RealEstateWebsiteType } from '../types/RealEstateWebsite'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class RealEstateWebsiteService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<RealEstateWebsiteType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await RealEstateWebsite
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
  }

  async create (_, args): Promise<RealEstateWebsiteType> {
    try {
      return await RealEstateWebsite.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
