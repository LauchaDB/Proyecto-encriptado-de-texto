let botonEncriptado = document.querySelector(".encriptado");
botonEncriptado.onclick = encriptadoDeTexto; 

let botonDesencriptado = document.querySelector(".desencriptado");
botonDesencriptado.onclick = desencriptadoDeTexto; 

let botonCopiar = document.querySelector(".copiado");
botonCopiar.onclick = copiadoDeTexto; 

let inputResult = document.querySelector(".resultado");



function encriptadoDeTexto(){
    let mensajeYaEncriptado = "";
    let mensajeIngresado = document.querySelector(".mensaje").value;
    let arraydelmensaje = mensajeIngresado.split('');

    for(let i = 0; i < arraydelmensaje.length; i++){

        if(arraydelmensaje[i] == "a"){
            mensajeYaEncriptado = mensajeYaEncriptado + "ai";
        }
        if(arraydelmensaje[i] == "e"){
            mensajeYaEncriptado = mensajeYaEncriptado + "enter";
        }
        if(arraydelmensaje[i] == "i"){
            mensajeYaEncriptado = mensajeYaEncriptado + "imes";
        }
        if(arraydelmensaje[i] == "o"){
            mensajeYaEncriptado = mensajeYaEncriptado + "ober";
        }
        if(arraydelmensaje[i] == "u"){
            mensajeYaEncriptado = mensajeYaEncriptado + "ufat";
        }
        if(arraydelmensaje[i] != "a" && arraydelmensaje[i] != "e" && arraydelmensaje[i] != "i" && arraydelmensaje[i] != "o" && arraydelmensaje[i] != "u"){
            mensajeYaEncriptado = mensajeYaEncriptado + arraydelmensaje[i];
        }
    }

    $("#result").val(mensajeYaEncriptado);
};

function desencriptadoDeTexto(){
    let mensajeYaDesencriptado = "";
    let mensajeIngresado = document.querySelector(".mensaje").value;
    let arraydelmensaje = mensajeIngresado.split('');

    for(let i = 0; i < arraydelmensaje.length; i++){

        if(arraydelmensaje[i] == "a"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + "a";
        }
        if(arraydelmensaje[i] == "e"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + "e";
        }
        if(arraydelmensaje[i] == "i"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + "i";
        }
        if(arraydelmensaje[i] == "o"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + "o";
        }
        if(arraydelmensaje[i] == "u"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + "u";
        }
        if(arraydelmensaje[i] != "a" && arraydelmensaje[i] != "e" && arraydelmensaje[i] != "i" && arraydelmensaje[i] != "o" && arraydelmensaje[i] != "u"){
            mensajeYaDesencriptado = mensajeYaDesencriptado + arraydelmensaje[i];
        }
        if(arraydelmensaje[i] == "a"){
            i=i+1;
        } else if(arraydelmensaje[i] == "e"){
            i=i+4;
        } else if(arraydelmensaje[i] == "i"){
            i=i+3;
        } else if(arraydelmensaje[i] == "o"){
            i=i+3;
        } else if(arraydelmensaje[i] == "u"){
            i=i+3;
        }
    }
    
    $("#result").val(mensajeYaDesencriptado);
};

function copiadoDeTexto(){
    let contenidoDelInputResultado = document.querySelector(".resultado");
    contenidoDelInputResultado.select();
    document.execCommand('copy');
}; 
