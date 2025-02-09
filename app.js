let numeroSecreto = 0;
let numeroMaximo = 10;
let intento = 0;
let lista = [];
console.log(numeroSecreto);


function generarNumero(){
    let numero = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numero)
    console.log(lista)
    //si el numero generado esta en la lista
    if(lista.length == numeroMaximo){
        textos('h1',"ya se sortearon todos los numeros")
    }else{
    if(lista.includes(numero)){
        return generarNumero()
    }else{
        lista.push(numero)
        numeroSecreto = numero
        return numero;
    }
}
    
}


function validaIntento(){
    let numeroUsuario = document.querySelector('input').value;
    if( numeroUsuario == numeroSecreto){
        textos('h1',`LO ADIVINASTE`);
        textos('p',`Adivinaste el numero secreto lo lograste en ${intento}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            textos('h1',`FALLASTE`);
            textos('p',`el numero es menor`);
        }else{
            textos('h1',`FALLASTE`);
            textos('p',`el numero es mayor`);
        }
    }
}



function textos(tag,tx){
    let texto= document.querySelector(tag)
    texto.innerHTML = tx

}

function nuevoJuego(){
generarNumero();
}



function dificultad(){
    let nivel = document.querySelector('select').value;
    numeroMaximo = nivel
    console.log(numeroMaximo)
    textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo}`);
}
generarNumero();

textos('h1',`Bienvenido al Juego Adivina el numero Secreto`);