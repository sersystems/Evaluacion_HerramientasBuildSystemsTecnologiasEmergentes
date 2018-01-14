
	const 	express = require('express'),
			bodyParser = require('body-parser'),
			expressJWT = require('express-jwt'),
			cors = require('cors'),
			port = process.env.PORT || 3000,
			app = express()


	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cors());
	//app.use(expressJWT({secret: 'EstaEsMiClaveSecreta_123456_SergioRegaladoAlessi'}).unless({path: ['/login']}));

	var connection = require('./connection'),
		routes = require('./routes')

	connection.iniciar();
	routes.configurar(app);


	//Verifica y notifica si esta corriendo el Servidor
	app.listen(port, function() {
		console.log('Base de Datos MySQL corriendo en XAMPP http://localhost:80');
  		console.log('Servidor corriendo en http://localhost:'+port);
	})