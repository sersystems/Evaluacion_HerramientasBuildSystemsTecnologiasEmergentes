import { BrowserModule }               from '@angular/platform-browser';
import { NgModule }                    from '@angular/core';
import { FormsModule }                 from '@angular/forms';
import { HttpModule }                  from '@angular/http';

import { Ruteador }                    from './app.routes'; //Mis Rutas

import { AppComponent }                from './app.component';
import { FooterComponent }             from './componentes/footer/footer.component';
import { HeaderComponent }             from './componentes/header/header.component';
import { ProductosComponent }          from './componentes/productos/productos.component';
import { ProductosListaComponent }     from './componentes/productos/productos-lista.component';
import { ProductosDetalleComponent }   from './componentes/productos/productos-detalle.component';
import { LoginComponent }              from './componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductosComponent,
    ProductosListaComponent,
    ProductosDetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ruteador
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
