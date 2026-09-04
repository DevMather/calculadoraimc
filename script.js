const campoPeso = document.getElementById("campoPeso");
const campoAltura = document.getElementById("campoAltura");
const botao = document.getElementById("calcular");
const mensagem1 = document.getElementById("resultado");
const mensagem2 = document.getElementById("mensagem2");

function calcularIMC() {

    let peso = Number(campoPeso.value.trim());
    let altura = Number(campoAltura.value.trim());


    if (campoAltura.value.trim() === "" || campoPeso.value.trim() === "") {
        alert("Preencha todos os campos!")
        return;
    }

    if (peso <= 0 || altura <= 0) {
        alert("Insira números válidos (Maiores que 0)!")
        return;
    }

    let IMC = peso / (altura * altura);
    mensagem1.textContent = IMC.toFixed(2)
    if (IMC < 18.5) {
        mensagem2.textContent = "Abaixo do peso";;
    } else if (IMC < 25) {
        mensagem2.textContent = "Peso Normal"
    } else if (IMC < 30) {
        mensagem2.textContent = "Sobrepreso";
    } else if (IMC < 35) {
        mensagem2.textContent = "Obesidade Grau I";
    } else if (IMC < 40) {
        mensagem2.textContent = "Obesidade Grau II";
    } else {
        mensagem2.textContent = "Obesidade Grau III"
    }


    campoPeso.value = "";
    campoAltura.value = "";

}

botao.addEventListener("click", calcularIMC);