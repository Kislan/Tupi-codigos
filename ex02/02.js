function converter(){
    let cel = document.getElementById("tic").value
    let res = document.getElementById("res")
    let conver = (cel * 9/5 + 32)

    res.innerHTML = (`A conversão de Celsius para fahreint: ${cel} --> ${conver}`)
}

// (C × 9/5) + 32