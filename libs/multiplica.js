const colors = require('colors');
const fs = require('fs');
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        data = '';
        if(!Number(base)){
            reject(`Valor nintl...`)
        }
        for(let i = 1; i <= limite; i++){
            data+=`${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if(err)
                {reject(err);}
            else
                {resolve(`tabla-${base}`);}
        })
    });
}
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        data = '';
        if(!Number(base) || !Number(limite)){
            reject('ARGUMENTO INVÀLIDO');
        }
        console.log("-------------------------------------".green);
        console.log(`----Listando Tabla de Base ${base}---`.green);
        console.log("-------------------------------------".green);
        for(i = 1; i <= limite; i++){
            data+=`${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}
