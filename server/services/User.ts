import { User } from '../models'
import { User as UserType } from '../types/User'
import bcrypt from 'bcryptjs'
import validateEmail from '../utils/validateEmail'
import validatePassword from '../utils/validatePassword'
import { Paginator } from '../types/Paginator'
import { Sorting } from '../types/Sorting'
import prepareSortingObject from '../utils/prepareSortingObject'

export class UserService {
  async find (
    paginator: Paginator,
    sorting: Sorting
  ): Promise<UserType[]> {
    const {
      size,
      page,
      offset = 0
    } = paginator

    return await User
      .find({})
      .limit(size)
      .skip((page - 1) * size + offset)
      .sort(prepareSortingObject(sorting))
      .populate('favoriteFlats')
      .populate({
        path: 'favoriteFlats',
        populate: {
          path: 'city',
          model: 'city'
        }
      })
      .populate({
        path: 'favoriteFlats',
        populate: {
          path: 'neighbourhood',
          model: 'neighbourhood'
        }
      })
  }

  async register (_, args): Promise<UserType> {
    try {
      const preparedUserData = await this.validateAndPrepareUserData(args)
      return await User.create(preparedUserData)
    } catch (err) {
      console.error(err)
    }
  }

  async validateAndPrepareUserData (args) {
    const {
      email,
      password
    } = args

    await Promise.all([
      validateEmail(email),
      validatePassword(password)
    ])

    const lowercaseEmail = email.toLowerCase()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    return {
      ...args,
      email: lowercaseEmail,
      password: hashedPassword
    }
  }
}
