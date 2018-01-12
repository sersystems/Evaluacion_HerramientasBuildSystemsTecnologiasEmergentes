import { NgModule } 					from '@angular/core';
import { RouterModule, Routes } 		from '@angular/router';

import { HeaderComponent } 				from './componentes/header/header.component';
import { FooterComponent } 				from './componentes/footer/footer.component';
import { ProductosComponent } 			from './componentes/productos/productos.component';
import { ProductosListaComponent } 		from './componentes/productos/productos-lista.component';
import { ProductosDetalleComponent } 	from './componentes/productos/productos-detalle.component';
import { LoginComponent } 				from './componentes/login/login.component';


const misRutas: Routes = [
	{ path: 'header', component: HeaderComponent },
	{ path: 'footer', component: FooterComponent },
	{ path: 'productos', component: ProductosComponent,
		children: [
			{ path: '**', redirectTo: 'lista', pathMatch: 'full' },
			{ path: 'lista', component: ProductosListaComponent },
			{ path: 'detalle', component: ProductosDetalleComponent },
			{ path: 'detalle/:id', component: ProductosDetalleComponent }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(misRutas)
	],
	exports: [
		RouterModule
	]
})

export class Ruteador {}