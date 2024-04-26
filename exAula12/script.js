function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
var hora = 13
    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#02b0fae6'
    }else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#120b8be6'
    }
}
prompt('Bem vindo ao meu primeiro teste em JS! Preparado?')