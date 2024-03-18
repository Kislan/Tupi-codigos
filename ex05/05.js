function pesquisar(){
    let text = document.getElementById("ti")
    let letra = document.getElementById("ri")
    let res = document.getElementById("res")

    if (text.includes(letra)){
        res.innerHTML = (`A letra ${letra} aparece `)
    }
}