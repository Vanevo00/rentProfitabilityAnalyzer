import { RealEstateLink } from '../models'
import { RealEstateLink as RealEstateLinkType } from '../types/RealEstateLink'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class RealEstateLinkService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<RealEstateLinkType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await RealEstateLink
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('website')
  }

  async create (_, args): Promise<RealEstateLinkType> {
    try {
      return await RealEstateLink.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
