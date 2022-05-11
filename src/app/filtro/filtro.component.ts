import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, timeout } from 'rxjs';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.sass']
})
export class FiltroComponent implements OnInit {

  @Output() juegos: Juego[] = []
  @Output() isShowFilter = new EventEmitter()
  @Output() submit = new EventEmitter()
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private juegosService: JuegosService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.maxLength(100)]],
      genre: [null, [Validators.maxLength(100)]],
      year: [null, [Validators.maxLength(100)]]
    })
  }

  submitForm(){
    console.log(this.form.value)
    this.juegosService.getJuegosFiltered(this.form.value).then((data: any) => {
      Catalogo.juegos = data
      this.submit.emit(null);
    });
  }

  cancelForm(){
    this.isShowFilter.emit(false);
  }

}
