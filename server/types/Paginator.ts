export interface Paginator {
  page: number
  size: number
  offset?: number
}

export const DefaultPaginator = {
  page: 1,
  size: 30,
  offset: 0
}
