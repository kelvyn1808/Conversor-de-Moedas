let valorUsuario = document.querySelector("#valor")
let moedaUsuario = document.querySelector("#moedas")
let btn = document.querySelector("#btn")

function pegarMoeda() {
    const moeda = moedaUsuario.value

    fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}`)
        .then((res) => res.json())
        .then((data) => {
            displayResultado(data, moeda)
        })
}

function displayResultado(data, moeda) {
    const chave = moeda.replace("-", "")
    const valorAtual = data[chave].bid
    const cotacao = (valorUsuario.value * valorAtual).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
    
    const divRes = document.querySelector(".display-res")
    const divContainer = document.querySelector(".display-res")

    divContainer.classList.add("style-container")

    divRes.innerHTML = `
        <div class="resultado">
            <p>${chave.replace("BRL", "")} $${valorUsuario.value} = ${cotacao}</p> 
            <p>${cotacao} reais</p>
        </div>`
}

btn.addEventListener("click", pegarMoeda)
