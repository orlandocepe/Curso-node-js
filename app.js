
const {crearArchivo}=require("./multiplicar");

const argv=require("./yargs")

console.log(argv)
crearArchivo(argv.b,argv.l,argv.h)

    