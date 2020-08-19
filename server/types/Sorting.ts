export interface Sorting {
    key: string
    order?: Order
}

enum Order {
  DESC = -1,
  ASC = 1
}

export const DefaultSorting: Sorting = {
  key: 'created',
  order: Order.DESC
}
