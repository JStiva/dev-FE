import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination, Tvrtka } from '../../types/api';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  baseUrl = 'http://localhost:5003/';

  http = inject(HttpClient);
  getCompaniesFromApi(page = 1, pageSize = 100) {
    const url = `${this.baseUrl}registar?page=${page}&pageSize=${pageSize}`;
    return this.http.get<PaginatedTvrtka>(url);
  }
}
export interface PaginatedTvrtka {
  data: Tvrtka[];
  pagination: Pagination;
}
