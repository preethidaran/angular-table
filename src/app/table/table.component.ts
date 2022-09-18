import { Component, OnInit } from '@angular/core';
import { UserReports } from 'src/userReports';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA: UserReports[] = []; 
  displayColumns : string[] = ['id', 'name','email', 'gender' , 'status'];
  dataSource = new MatTableDataSource<UserReports>(this.ELEMENT_DATA);
  

  constructor(private service: ApiService) { }

  ngOnInit(){
    this.getAllReports();
  }

  public getAllReports(){
    let response =  this.service.userReports();
    response.subscribe(report => this.dataSource.data =  report as UserReports[]);
    // console.log(response);
  }

}
