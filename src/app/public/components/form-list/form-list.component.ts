import { Component, Input, OnInit } from '@angular/core';
import { BasicFormDetails } from '../../models/UIModels/BasicFormDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit  {

  @Input() list : any[] = [];
  constructor(private router: Router){}
  ngOnInit(): void {
  }
  navigateToForm(form:BasicFormDetails){
    this.router.navigateByUrl(`view-form/${form.Id}`);
  }
}
