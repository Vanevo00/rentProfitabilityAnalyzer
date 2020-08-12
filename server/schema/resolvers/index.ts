import { merge } from 'lodash'
import city from './city'
import neighbourhood from './neighbourhood'
import flat from './flat'
import rent from './rent'

export default merge(
  city,
  neighbourhood,
  flat,
  rent
)
