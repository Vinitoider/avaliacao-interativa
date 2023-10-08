const seceavaliacao = document.querySelector('.avaliacao')
const ulestrelas = document.querySelectorAll('.numero-avaliacao')
const botao = document.querySelector('.botao')
const secagradecimento = document.querySelector('.agradecimento')
const spanagradecimento = document.querySelector('.qntd-estrelas')
let nota = null

ulestrelas.forEach((estrela) => {
    estrela.addEventListener('click', (e) => {
        const checked = document.querySelector('.numero-avaliacao.checked')
        if (checked) {
            checked.classList.remove('checked')
        }
        const card = e.target
        card.classList.add('checked')
        nota = e.target.innerText
    })
})

botao.addEventListener('click', () => {
    if (nota) {
        spanagradecimento.innerText = nota
        secagradecimento.classList.remove('escondido')
        seceavaliacao.classList.add('escondido')
    }
})

