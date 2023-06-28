function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if (pas <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }         
        // contagem crescente
        if (ini < fi){
            for(let c = ini; c <= fi; c += pas){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }   
        // contagem decrescente         
        } else {
            for (let c = ini; c >= fi; c -= pas){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }            
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
    
}
