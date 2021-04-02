
const argv=require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption:true,
                describe: 'Es la base de la tabal de multiplicar'

            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default:10, 
                describe: 'Hasta donde quieres la tabla de multiplicar'

            })
            .option('l',{
                alias:'lista',
                type:'boolean',
                default: false,
                describe:'Mueltra la tabla en consola'
            })
            .check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true
            })
            .argv;

module.exports=argv;