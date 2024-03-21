let ordem = []
function cres(){
    let numero = document.getElementById("num1").value
    let res = document.getElementById("res")
    ordem.push(numero)
    res.innerHTML = `Ordem Crescente: ${ordem.sort(ordem)}`

}