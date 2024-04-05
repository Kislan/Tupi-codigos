function Giva(){
    let texto = document.getElementById("texto").value
    let palavra = document.getElementById("Palavra_T").value
    let troca = document.getElementById("palavra").value
    let res = document.getElementById("res")

    subs = texto.replace(`${troca}`,`${palavra}`)

    res.innerHTML = subs 
    

}