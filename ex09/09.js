function miguel(){
    altura = document.getElementById("altura").value
    largura = document.getElementById("largura").value
    res = document.getElementById("res")

    calculoArea = (altura * largura)


    res.innerHTML = `A área do retangulo: ${calculoArea}`
        
}


// <!-- Desenvolva uma função que calcule a área de um retângulo, usando valores de altura e largura inseridos em um formulário. -->