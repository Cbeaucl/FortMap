import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MapFeature } from '../map-feature';
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  mapFeatureForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  ngOnInit() { }

  onSubmit() { }

  createForm() {
    this.mapFeatureForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      longitude: '',
      latitude: ''
    });
  }
}
