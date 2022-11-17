
//El objeto arguments continene los argumentos que se le pase
// anteriormente se ocupaba arguments actualmente se ocupa el operador(...arguments)
// Las funciones flecha () => no contienen arguments
function separador(){
    let resultado = ''
    for (let i = 0; i <arguments.length; i++) {
        if(resultado !== ''){
            resultado += ', '
        }
        resultado += arguments[i]
    }
    return resultado
}


//Operador (...arguments) es un array y tiene todos los metodos de un array [map,reduce,filter,etc]
// Las funciones flecha SI contienen el operador (...arguments)
function separador(...string){
    let resultado = ''
    for (let i = 0; i <string.length; i++) {
        if(resultado !== ''){
            resultado += ', '
        }
        resultado += string[i]
    }
    return resultado
}

//Utilizando reduce en lugar del FOR
const separadorCon = (separador,...strings) => strings.reduce((resultado,str) =>{
    if(resultado !== ''){
        resultado += separador
    };
    return resultado +str
},'')