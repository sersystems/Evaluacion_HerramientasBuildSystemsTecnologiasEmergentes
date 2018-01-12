	
	const mySQL = require('mysql')

	function ConectarDB() {
		this.pool = null;

		this.iniciar = function(){
			this.pool = mySQL.createPool({
				conexionLimite: 10,
				host: 'localhost',
				user: 'root',
				pass: '',
				database: 'nextu_tienda'
			})
		}

		this.establecer = function(respuesta){
			this.pool.getConnection(function(error, cnx){
				respuesta(error, cnx);
			})
		}		
	}

	module.exports = new ConectarDB();