const {crearArchivo}=require("./multiplicar");
const argv=require('yargs').argv

console.log(process.argv)
console.log(argv)
console.log('base: yargs ',argv.base)
crearArchivo(argv.base)