function pesquisar(){
    let text = document.getElementById("ti").value
    let letra = document.getElementById("ri").value
    let res = document.getElementById("res")
    let comprimento = text.length
    let contar = 0

    if (text.includes(letra)){
        for(let i = 0;i<comprimento;i++)
            if(text[i] === letra){
                contar++
            }

        res.innerHTML = `A letra: "${letra}" Aparece ${contar} vezes`
    }else{
        res.innerHTML = `A letra: "${letra}" Não foi encontrada`
    }
}