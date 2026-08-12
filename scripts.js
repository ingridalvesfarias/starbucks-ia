let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem-copo")
let botaoSininho = document.querySelector("#botao-sininho")

function mudarCor(cor) {

    circulo.style.backgroundColor = cor
}

function trocaImagem(imagem) {
    imagemCopo.src = imagem
}

// Abre o webchat do Botpress ao clicar no botão
botaoSininho.addEventListener("click", function () {
    if (window.botpress) {
        window.botpress.open()
    } else {
        console.log("Botpress ainda não carregou. Tente novamente em instantes.")
    }
})