function tatu(){
    numero = document.getElementById("nu").value
    res = document.getElementById("res")

    if(numero % 2 == 0){
        res.innerHTML = (`O número ${numero} é PAR`)
    }else{
        res.innerHTML = (`O número ${numero} é IMPAR`)
    }
}