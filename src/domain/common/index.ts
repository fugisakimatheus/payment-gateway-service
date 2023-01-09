export type PaginatedParams<T = undefined> = {
  filters: T
  pagina?: number
  por_pagina?: number
}

export type PaginatedReturnData<T> = {
  data: T[]
  total: number
}
