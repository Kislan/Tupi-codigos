function tome(){
    let email = document.getElementById("em").value
    let res = document.getElementById("res").value

    if(email.includes('@') && email.includes('.')){
        alert(`Seu email está correto`)
    }else if (email.includes("@")){
        alert("Está faltando o .")
    }else{
        alert("Está faltando o @")
    }
}