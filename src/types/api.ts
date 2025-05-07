export interface Tvrtka {
  id?: number;
  mbs: number;
  ime: string;
  naznakaImena: string;
}

export interface Pagination {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}
