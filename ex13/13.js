function tila(){
    let texto = document.getElementById("text").value
    let res = document.getElementById("res")
    espaco = texto.split(" ")
    tico = espaco.join("")

    res.innerHTML = `${tico}`
    
}