import { UserActivation } from '../models'
import { UserActivation as UserActivationType } from '../types/UserActivation'
import { v4 as uuid } from 'uuid'

export class UserActivationService {
  async findOne (args): Promise<UserActivationType> {
    try {
      return await UserActivation
        .findOne(args)
        .populate('user')
    } catch (err) {
      console.error(err)
    }
  }

  async create (user): Promise<UserActivationType> {
    try {
      const preparedActivation = await this.prepareActivation(user)

      return await UserActivation.create(preparedActivation)
    } catch (err) {
      console.error(err)
    }
  }

  async prepareActivation (user: string) {
    const activationCode = uuid()

    return {
      user,
      activationCode
    }
  }
}
