import { MatCardModule } from '@angular/material/card';
import { OnInit, Component, ViewChild, inject } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CompaniesService } from '../../services/companies.service';
import { Tvrtka } from '../../../types/api';

@Component({
  selector: 'app-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  companiesService = inject(CompaniesService);

  displayedColumns: string[] = ['id', 'mbs', 'ime', 'naznakaImena'];
  dataSource = new MatTableDataSource<Tvrtka>();
  totalItems = 0;
  pageSize = 10;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.companiesService
      .getCompaniesFromApi(this.currentPage, this.pageSize)
      .subscribe(
        (response) => {
          this.dataSource.data = response.data;
          this.totalItems = response.pagination.totalItems;
        },
        (error) => {
          console.error('Error: fetching items:', error);
        }
      );
  }
  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadItems();
  }
}
