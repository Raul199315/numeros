let numeroSecreto = 0;
let numeroMaximo = 0;
let intento = 0;
let nivelDificultad = 0;
//let lista = [];
//console.log(numeroSecreto);


/*
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
*/

function generarNumero(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    numeroSecreto = numeroGenerado
    console.log(numeroSecreto)
    return numeroGenerado;
}

function validaIntento(){
    let numeroUsuario = document.querySelector('input').value;
    if(nivelDificultad > intento){
        if(numeroUsuario == numeroSecreto){
            textos('h1',`LO ADIVINASTE`);
            textos('p',`Adivinaste el numero secreto lo lograste en ${intento} intentos`);
        }else{
            if(numeroUsuario > numeroSecreto){
                textos('h1',`FALLASTE`);
                textos('p',`el numero es menor`);
                intento++
            }else{
                textos('h1',`FALLASTE`);
                textos('p',`el numero es mayor`);
                intento++
            }
        }
    }else{
        textos('h1','Fin Del Juego')
        textos('p','no puedes usar mas intentos')
        document.querySelector('#botonIntento').setAttribute('disabled','true');
        
    }
    
}



function textos(tag,tx){
    let texto= document.querySelector(tag)
    texto.innerHTML = tx

}

function nuevoJuego(){
generarNumero();
intento = '';
}



function dificultad(){
    let nivel = document.querySelector('select').value;
    numeroMaximo = nivel
    if(nivel == 5){
        nivelDificultad =2
        textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
        document.getElementById('botonIntento').removeAttribute('disabled');
        generarNumero()
    }else{
        if(nivel == 10){
            nivelDificultad =3
            textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
            document.getElementById('botonIntento').removeAttribute('disabled');
            generarNumero()
        }else{
            nivelDificultad =4
            textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
            document.getElementById('botonIntento').removeAttribute('disabled');
            generarNumero()
        }
    }

}


generarNumero();
textos('h1',`Bienvenido al Juego Adivina el numero Secreto`);
textos('p','para jugar seleccina una dificultad')
console.log(intento);
/*
function numSecreto(){
    if(){
    }else
}
    */