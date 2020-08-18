import { RealEstateLink } from '../models'
import { RealEstateLink as RealEstateLinkType } from '../types/RealEstateLink'
import { Paginator } from '../types/Paginator'

export class RealEstateLinkService {
  async find (
    paginator: Paginator
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
