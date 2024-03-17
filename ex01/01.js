function calcular(){
    let data = document.getElementById("pop").value
    let dataNas = new Date(data);
    let res = document.getElementById("res")

    let hoje = new Date()

    let idade = hoje.getFullYear() - dataNas.getFullYear()
    let mes = hoje.getMonth() - dataNas.getMonth()

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNas.getDate())) {
        idade--
    }

    res.innerHTML = `Idade: ${idade} anos`
}

// <!-- Crie uma função que calcule a idade de uma pessoa com base na data de nascimento fornecida em um campo de formulário. -->