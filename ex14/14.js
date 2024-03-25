function oxe() {
    let num = document.getElementById("num").value;
    let res = document.getElementById("res");

    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    res.innerHTML = `Fatorial de ${num}: ${resultado}`
}


res.innerHTML = `Fatorial de ${num}: ${resultado}`