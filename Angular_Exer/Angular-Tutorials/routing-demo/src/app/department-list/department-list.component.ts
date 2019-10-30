import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  
  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    
    } );
  }

  onSelect(department) {
    // Router service is used to navigate to different urls (components)
    //this.router.navigate(['/departments', department.id]);              // navigate to /departments/:id , The first argument is parameter array
    
    this.router.navigate([department.id], { relativeTo: this.route });   // When using relative route, only pass parameter, no need for route url.
  }

  isSelected(department) { return department.id === this.selectedId; }
}
