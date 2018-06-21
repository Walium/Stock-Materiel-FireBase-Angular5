import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-edit',
  templateUrl: './appareil-edit.component.html',
  styleUrls: ['./appareil-edit.component.scss']
})
export class AppareilEditComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }

}
