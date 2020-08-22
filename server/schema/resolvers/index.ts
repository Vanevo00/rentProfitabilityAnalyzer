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
import county from './county'
import district from './district'

export default merge(
  date,
  county,
  district,
  city,
  neighbourhood,
  flat,
  rent,
  user,
  auction,
  realEstateWebsite,
  realEstateLink
)
