
let mensaje = prompt("Escribí algo")


let h1 = document.createElement("h1")
h1.innerHTML = mensaje
document.body.append(h1)



let color = prompt("¿Que color queres?")


if(color.toUpperCase() === "ROJO"){
    h1.className = "color-rojo"
}
else if(color.toUpperCase() === "VERDE"){
    h1.className = "color-verde"
}
else if(color.toLocaleUpperCase() === "AZUL"){
    h1.className = "color-azul"
}

