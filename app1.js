
console.clear()
const fs=require('fs')
let salida=''
for(i=1;i<=10;i++)
{
    salida+=`5  x ${i} = ${i*5}\n`
}

fs.writeFile('tabla-5.txt',salida,(err)=>{
    if (err) throw err;
    console.log('tabla-5.txt creado')
})