import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    
    <!-- Display the child component -->
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  // ActivatedRoute service is used to read the route parameter
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // snapshot has a drawback, which is when you navigate from one component, and back to the same component. 
    // The parameter (in this case is id) won't change. Becasue Angular will reuse the same component(ngOnInit won't get called again).
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));      // from the current route snapshot to get the id parameter
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;

    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    // Router service is used to navigate through different urls.
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);   // The object {id: selectedId} is the optional route parameter we want to send
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
  
  showOverview(){
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact(){
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
