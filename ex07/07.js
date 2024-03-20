function baba(){
    senha = document.getElementById("se").value
    res = document.getElementById("res")
    cor = document.getElementById("cor")


    if(senha.length >= 6){
        res.innerHTML = "A senha possui 6 ou mais caracteres"
        cor.style.color = "green"
    }else {
        res.innerHTML = "A senha tem que ter no minimo 6 caracteres"
        cor.style.color = "red"
    }
}