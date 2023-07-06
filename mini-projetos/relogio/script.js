function carregar(){    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sec = window.document.getElementById('section')
    
    var data = new Date()  
    var hora = data.getHours()
            
    msg.innerHTML = `Agora são ${hora} hora(s).`
    
    if(hora >= 6 && hora < 12){
         //BOM DIA!
         img.src = 'midia/dia.png'
         document.body.style.background = '#d6d4bb' 
         sec.style.background = '#dbc979'
         
    }else if(hora >=12 && hora < 18){
         //BOA TARDE!
         img.src = 'midia/tarde.png'
         document.body.style.background = '#b8776a'
         sec.style.background = '#b45d5d'       
    }else{
       //BOA NOITE !
       img.src = 'midia/noite.png'
       document.body.style.background = '#5174a1'
       sec.style.background = '#1155ad'
    }
}

var audio = new Audio('midia/piano.mp3')
var div = document.getElementById('buttontxt')

function tocar(){      
    audio.play()
    div.innerHTML = 'Clique duas vezes para pausar'
}
function parar(){
    audio.pause()    
    div.innerHTML = ''
}