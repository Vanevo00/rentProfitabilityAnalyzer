import { UserActivationService } from '../../services/UserActivation'
import { UserActivation as UserActivationType } from '../../types/UserActivation'

const userActivationService = new UserActivationService()

export default {
  Query: {
    findUserActivationByActivationCode: async (
      _,
      args: { activationCode: string }
    ): Promise<UserActivationType> => {
      const {
        activationCode
      } = args

      return await userActivationService.findOne({ activationCode })
    }
  },
  Mutation: {
    createUserActivation: async (
      _,
      args: { user: string }
    ): Promise<UserActivationType> => {
      const {
        user
      } = args

      return await userActivationService.create(user)
    }
  }
}
