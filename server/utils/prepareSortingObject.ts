import { Sorting } from '../types/Sorting'

export default (sorting: Sorting) => {
  const {
    key,
    order
  } = sorting

  return { [key]: order }
}
