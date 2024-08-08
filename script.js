const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
    mensagem.style.backgroundImage = "none";
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(textArea.value);
    mensagem.value = textDesencriptado;
    mensagem.style.backgroundImage = 'none';
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;    
}

function btnCopiar() {
    const mensagemTextarea = document.querySelector('.mensagem');
    mensagemTextarea.select();
    document.execCommand('copy');
    mensagem.value = "";
    alert('Texto copiado para a área de transferência!');
}