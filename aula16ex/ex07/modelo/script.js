var numtxt = document.querySelector('input#numtxt')
var select = document.querySelector('select#quadro')
var div = document.querySelector('div#final')
var lista = []

function adicionar(){
    if(numtxt.value.length == 0){
        alert('[ERRO] Digite um valor!')
    } else if(numtxt.value <= 0 || numtxt.value > 100){
        alert('[ERRO] Digite apenas valores entre 1 e 100')
    } else if(lista.indexOf(Number(numtxt.value)) != -1){
        alert('[ERRO] Valor já se encontra na lista!')
    } else {
        div.innerHTML = ''
        var n = Number(numtxt.value)        
        lista.push(n)
        
        var valor = document.createElement('option')
        valor.text = `Valor ${n} foi adicionado.`
        select.appendChild(valor)
        
    }
    numtxt.value = ''
    numtxt.focus()
}

function finalizar(){
    let total = lista.length
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    media = 0
    for(let pos in lista){
        soma += lista[pos]
        if(lista[pos] > maior){
            maior = lista[pos]
        }
        if(lista[pos] < menor){
            menor = lista[pos]
        }                   
    }
    media = soma / total

    div.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
    div.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    div.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    div.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`    
    div.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}