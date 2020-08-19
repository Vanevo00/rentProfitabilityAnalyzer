import { merge } from 'lodash'
import city from './city'
import neighbourhood from './neighbourhood'
import flat from './flat'
import rent from './rent'
import user from './user'
import auction from './auction'
import realEstateWebsite from './realEstateWebsite'
import realEstateLink from './realEstateLink'
import date from './scalars/date'

export default merge(
  date,
  city,
  neighbourhood,
  flat,
  rent,
  user,
  auction,
  realEstateWebsite,
  realEstateLink
)
