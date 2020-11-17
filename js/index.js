
const mostraCotacoes = cotacoes => {
    let result = [];

    for (let cotacao in cotacoes) {
        let article = document.createElement('article')

        article.innerHTML =
            `<h2>${cotacao}</h2>
        <span>${cotacoes[cotacao]}</>
        `
        result.push(article)
    }

    return result
}

const carregaCotacoes = async () => {
    let resposta = await fetch('https://api.exchangeratesapi.io/latest')
    let data = await resposta.json()
    let articles = mostraCotacoes(data.rates)

    let outrasCotacoes = document.getElementById('outrasCotacoes');

    for(let article of articles){
        outrasCotacoes.appendChild(article)
    }

}

carregaCotacoes()



