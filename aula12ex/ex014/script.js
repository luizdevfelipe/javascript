function carregar(){    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()  
    var hora = data.getHours()  
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if(hora >= 0 && hora < 12){
        //BOM DIA !
        img.src = 'imagens/dia.png'
        document.body.style.background = '#d6d4bb'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b8776a'
    }else{
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#3573ae'
    }
}

