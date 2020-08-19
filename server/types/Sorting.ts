export interface Sorting {
  sorting?: {
    key: number
    order?: Order
  }
}

enum Order {
  DESC = 'DESC',
  ASC = 'ASC'
}
