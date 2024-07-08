function papo(){
    const nome = document.getElementById9("nome").value
    const gmail = document.getElementById("gmail").value
    const senha = document.getElementById("senha").value
    const senha2 = document.getElementById("senha2").value
    let nada = ocument.getElementById("nada").value

    if(nome || gmail || senha == nada){
        alert("Preencha todos os campos!")
    }
    if(gmail.includes("@") || gmail.includes(".")){

    }else{
        alert("O gmail precisa ter o @ ou .")
    }
    if(senha.length < 8){
        alert("senha tem pelo menos 8 caracteres")
    }
    if(senha != senha2){
        alert("a senha e a confirmação de senha não são iguais.")
    }

}

// <!-- 
// 20. Crie um formulário de cadastro que inclua campos para nome, e-mail, senha e confirmação de senha. Implemente uma função JavaScript que valide:
//     - Se todos os campos foram preenchidos.
//     - Se o e-mail contém um "@" e um ponto.
//     - Se a senha tem pelo menos 8 caracteres e inclui números e letras.
//     - Se a senha e a confirmação de senha são iguais.
    
//     Exiba mensagens de erro específicas para cada validação que falhar. -->