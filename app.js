const {crearArchivo, listarTabla} = require('./tablas/multiplica');
const argv = require('./config/yargs').argv;
const colors = require('colors');
/*listar es un comando y base es la flag, podemos añadir màs opciones.*/ 
let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(`Archivo creado: ${archivo.red}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
}