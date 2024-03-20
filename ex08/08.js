function vapo(){
    nome = document.getElementById("nome").value
    res = document.getElementById("res")

    if(typeof(nome) == "string"){
        res.innerHTML = `Saudações! ${nome}!`
    }
}