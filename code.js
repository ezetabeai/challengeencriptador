const textareaMensaje = document.querySelector("#mensaje");
const textareaResultado = document.querySelector("#resultado");

const btnEncriptar =document.querySelector("#btn-encriptar")
const btnDesencriptar =document.querySelector("#btn-desencriptar")
const btnCopiar = document.querySelector("#copiar")

function encriptar(){
var mensaje = textareaMensaje.value;
var mensajeEncriptado = textareaResultado.value;
replaceAll("e","enter");
replaceAll("i","imes");
replaceAll("o","ober");
replaceAll("a","ai");
replaceAll("u","ufat");

textareaResultado.value = mensajeEncriptado
}

function desencriptar(){
    var mensajeEncriptado = textareaMensaje.value;
    var mensaje = mensajeEncriptado;
    replaceAll("enter","e");
    replaceAll("imes","i");
    replaceAll("ober","o");
    replaceAll("ai","a");
    replaceAll("ufat","u");
}

function copiar(){
    var mensajeEncriptado = textareaResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado)
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;