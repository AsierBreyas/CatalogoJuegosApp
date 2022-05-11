import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { JuegosService } from '../api-service/juegos.service';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.sass']
})
export class FiltroComponent implements OnInit {

  @Output() juegos: Juego[] = []
  @Output() isShowFilter = new EventEmitter()
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private juegosService: JuegosService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.maxLength(100)]],
      genre: ['', [Validators.maxLength(100)]],
      year: ['', [Validators.maxLength(100)]]
    })
  }

  submitForm(){
    console.log(this.form.value)
    this.juegosService.getJuegosFiltered(this.form.value);
  }

  cancelForm(){
    this.isShowFilter.emit(false);
  }

}
