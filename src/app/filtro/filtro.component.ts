import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JuegosService } from '../api-service/juegos.service';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.sass']
})
export class FiltroComponent implements OnInit {

  @Output() juegos: Juego[] = []
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private juegosService: JuegosService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.maxLength(100)]],
      genre: ['', [Validators.maxLength(100)]],
      year: ['', [Validators.maxLength(100)]]
    })
  }

  submitForm(){
    this.juegosService.getJuegosFiltered(this.form.value);
  }

}
