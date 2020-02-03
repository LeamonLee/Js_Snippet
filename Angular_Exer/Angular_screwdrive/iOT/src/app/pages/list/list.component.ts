import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lists: string[] = []

  constructor(
    private _http:HttpClient
  ) { }

  ngOnInit() {
    this._http.get('http://10.101.100.179:5001/screwdrive/data/serialNum').subscribe((res:any) => {
      this.lists = res.result
    })
  }

}
