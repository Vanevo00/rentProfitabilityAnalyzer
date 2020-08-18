import { RealEstateWebsite } from '../models'
import { RealEstateWebsite as RealEstateWebsiteType } from '../types/RealEstateWebsite'
import { Paginator } from '../types/Paginator'

export class RealEstateWebsiteService {
  async find (
    paginator: Paginator
  ): Promise<RealEstateWebsiteType[]> {
    const {
      paginator: {
        size = 30,
        page = 1,
        offset = 0
      } = {}
    } = paginator

    return await RealEstateWebsite
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
  }

  async create (_, args): Promise<RealEstateWebsiteType> {
    try {
      return await RealEstateWebsite.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
