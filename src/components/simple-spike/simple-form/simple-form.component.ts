import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Estatus} from "../model/estatus";

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  mainForm: FormGroup;
  status: Estatus;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.mainForm = this.fb.group({
      id: [],
      name: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:9002/catalogs/v1/status').subscribe(status => {
      this.status = status;
    });
  }

  onSave() {
    this.http.post("https://localhost:9002/utilities/documentos", this.mainForm.value).subscribe(ok => alert("ok"),
        err => alert("error " + err));
  }

}
