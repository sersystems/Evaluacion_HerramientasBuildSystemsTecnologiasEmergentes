	var jwt = require('jsonwebtoken'),
		conexion = require('./connection');

	function EjecutarDB() {
		

		// ***************************** Funciones de Productos ***************************** //
		//Función que obtiene todos los productos
		this.obtenerProductos = function(respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('SELECT * FROM productos', function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-001: Error al intentar obtener los productos'})
					} else {
						respuesta.send(resultado);	
					}
				});
			})
		}
		//Función que obtiene un producto
		this.obtenerProducto = function(idProducto, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('SELECT * FROM productos WHERE id=?', idProducto, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-002: Error al intentar obtener el producto'})
					} else {
						respuesta.send(resultado);	
					}
				});
			})
		}
		//Función que inserta un producto
		this.insertarProducto = function(datos, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('INSERT INTO productos SET ?', datos, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-003: Error al intentar insertar el producto'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}
		//Función que inserta un producto
		this.actualizarProducto = function(datos, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('UPDATE productos SET ? WHERE id=?', [datos, datos.id], function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-004: Error al intentar actualizar el producto'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}	
		//Función que elimina un producto
		this.eliminarProducto = function(idProducto, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('DELETE FROM productos WHERE id=?', idProducto, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-005: Error al intentar eliminar el producto'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}	


		// ***************************** Funciones de Usuarios ***************************** //
		//Función que obtiene todos los Usuarios
		this.obtenerUsuarios = function(respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('SELECT * FROM usuarios', function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-006: Error al intentar obtener los usuarios'})
					} else {
						respuesta.send(resultado);	
					}
				});
			})
		}
		//Función que obtiene un Usuario
		this.obtenerUsuario = function(idUsuario, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('SELECT * FROM usuarios WHERE id=?', idUsuario, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-007: Error al intentar obtener el usuario'})
					} else {
						respuesta.send(resultado);	
					}
				});
			})
		}
		//Función que inserta un Usuario
		this.insertarUsuario = function(datos, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('INSERT INTO usuarios SET ?', datos, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-008: Error al intentar insertar el usuario'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}
		//Función que inserta un Usuario
		this.actualizarUsuario = function(datos, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('UPDATE usuarios SET ? WHERE id=?', [datos, datos.id], function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-009: Error al intentar actualizar el usuario'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}	
		//Función que elimina un Usuario
		this.eliminarUsuario = function(idUsuario, respuesta) {
			conexion.establecer(function(err, cnx) {
				cnx.query('DELETE FROM usuarios WHERE id=?', idUsuario, function(error, resultado) {
					cnx.release();
					if (error) {
						respuesta.send({estado: 'E-010: Error al intentar eliminar el usuario'})
					} else {
						respuesta.send({estado: 'OK'});	
					}
				});
			})
		}	


	}

	module.exports = new EjecutarDB();