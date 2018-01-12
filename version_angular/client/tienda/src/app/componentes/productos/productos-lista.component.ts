import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../servicios/productos.service';
import { Productos } from '../../modelos/productos';

@Component({
  selector: 'productos-lista',
  templateUrl: './productos-lista.component.html'
})

export class ProductosListaComponent implements OnInit {

	lista: Productos[];

  	constructor(private servicio: ProductosService) { }

	ngOnInit() {
		this.servicio.getProductos()
			.subscribe(
				rs => this.lista = rs,
				er => console.log(er),
				() => console.log(this.lista)
			)
  	}
}