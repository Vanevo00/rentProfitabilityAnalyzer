import { RealEstateWebsite } from '../models'
import { RealEstateWebsite as RealEstateWebsiteType } from '../types/RealEstateWebsite'

export class RealEstateWebsiteService {
  async find (): Promise<RealEstateWebsiteType[]> {
    return await RealEstateWebsite.find({})
  }

  async create (_, args): Promise<RealEstateWebsiteType> {
    try {
      return await RealEstateWebsite.create(args)
    } catch (err) {
      console.error(err)
    }
  }
}
