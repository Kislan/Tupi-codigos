function troca(){
    let cor = document.getElementById("lol").value.toLowerCase()
    let text = document.getElementById("text")

    if (cor == "vermelho"){
        text.style.color = "red"
    }else if (cor == "azul"){
        text.style.color = "blue"
    }else if (cor == "amarelo"){
        text.style.color = "yellow"
    }else if (cor == "rosa"){
        text.style.color = "pink"
    }else if (cor == "roxo"){
        text.style.color = "purple"
    }else if (cor == "laranja"){
        text.style.color = "orange"
    }else if (cor == "marrom"){
        text.style.color = "brown"
    }else if (cor == "verde"){
        text.style.color = "green"
    }else if (cor == "preto"){
        text.style.color = "green"
    }else {
        alert("Escolha uma cor comum!")
    }
}