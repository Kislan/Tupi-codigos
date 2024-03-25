function trap() {
    let numero = document.getElementById("num").value.split(",")
    let res = document.getElementById("res")
    let ordem = document.getElementById("ordem").value
    let list = [parseFloat(numero)]
    
    if (ordem === "cres") {
        list.sort()
        res.innerHTML = `Na ordem Crescente: ${list}`
    } else if (ordem === "des") {
        list.sort()
        res.innerHTML = `Na ordem Descrescente: ${list.reverse()}`
    } else {
        alert("Siga as instruções")
    }
}