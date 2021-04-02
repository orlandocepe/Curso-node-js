const fs = require('fs');
var colors = require('colors');
const crearArchivo= ( base = 5,l=false,h=10)  =>{
 
    let salida=''

    for(i=1;i<=h;i++)
    {
        salida+=`${base} x ${i} = ${i*base}\n`
    }
    if(l){
        console.log(salida)
    }

    fs.writeFileSync('./salida/tabla-5.txt',salida);

    console.log('tabla-5.txt creado')
}

module.exports={
    crearArchivo
}

