import { RealEstateLink } from '../models'
import { RealEstateLink as RealEstateLinkType } from '../types/RealEstateLink'

export class RealEstateLinkService {
  async find (): Promise<RealEstateLinkType[]> {
    return await RealEstateLink
      .find({})
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
