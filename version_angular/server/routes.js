	var db = require('./queries');

	function Http() {
		this.configurar = function(app) {


			// ***************** Metodos de Usuarios ***************** //
			//Metodo que obtiene todos los productos
			app.get('/usuarios/', function(solicitud, respuesta) {
				db.obtenerUsuarios(respuesta);
			})
			//Metodo que obtiene un producto
			app.get('/usuarios/:id/', function(solicitud, respuesta) {
				db.obtenerUsuario(solicitud.params.id, respuesta);
			})
			//Metodo que inserta un producto
			app.post('/usuarios/', function(solicitud, respuesta) {
				db.insertarUsuario(solicitud.body, respuesta);
			})
			//Metodo que actualiza un producto
			app.put('/usuarios/', function(solicitud, respuesta) {
				db.actualizarUsuario(solicitud.body, respuesta);
			})
			//Metodo que elimina un producto
			app.delete('/usuarios/:id/', function(solicitud, respuesta) {
				db.eliminarUsuario(solicitud.params.id, respuesta);
			})


			// ***************** Metodos de Productos ***************** //
			//Metodo que obtiene todos los productos
			app.get('/productos/', function(solicitud, respuesta) {
				db.obtenerProductos(respuesta);
			})
			//Metodo que obtiene un producto
			app.get('/productos/:id/', function(solicitud, respuesta) {
				db.obtenerProducto(solicitud.params.id, respuesta);
			})
			//Metodo que inserta un producto
			app.post('/productos/', function(solicitud, respuesta) {
				db.insertarProducto(solicitud.body, respuesta);
			})
			//Metodo que actualiza un producto
			app.put('/productos/', function(solicitud, respuesta) {
				db.actualizarProducto(solicitud.body, respuesta);
			})
			//Metodo que elimina un producto
			app.delete('/productos/:id/', function(solicitud, respuesta) {
				db.eliminarProducto(solicitud.params.id, respuesta);
			})
		}
	}

	module.exports = new Http();