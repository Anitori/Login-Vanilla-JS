// Cambio lo que se ve en un primer momenro
document.getElementById("fondoMain2").style.display = "none"
document.getElementById("btnBack").style.display = "none"


// Agrego un div mediante JS
const Prueba = document.createElement("div")
Prueba.setAttribute("id","containerMainZz")
Prueba.textContent = "Por favor ingrese su usuario y contraseña"
document.getElementById("NewDiv").appendChild(Prueba)


// Agrego la función para ver lo escrito en la contraseña

function mostrarContrasena(){
    const tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

const name = document.getElementById("name").value
const password = document.getElementById("password").value
const enviar2 = document.getElementById("btnSave")

/////////////////////////////////////////////////////////// 

class pre {
    constructor({nombre,password}) {
        this.nombre = nombre;
        this.password = password;
    }  
}


let datos = [];

// Mediante este array imprimo en consola los datos ingresados en los inputs
const guardarDatos = () => {

    const ingreso = new pre ({
        nombre : document.getElementById("name").value,
        password : document.getElementById("password").value,
    })

    datos = ingreso
    return guardarDatos
}

//Evento que me activa el boton

let ver = document.getElementById("btnSave").addEventListener("click", (e) => {

    e.preventDefault() // Con esta función hago que no se me actualice la página al enviar los datos
    guardarDatos()

    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
     
    if ((datos.nombre == "asd") && (datos.password == "asd")) {
        document.getElementById("containerMainZz").textContent = `Bienvenido ${name}`
        document.getElementById("form").style.display = "none"
        document.getElementById("fondoMain2").innerHTML = ``

        document.getElementById("btnBack").style.display = "flex"
        document.getElementById("btnBack").addEventListener("click",(back()))
       
    } else if ((datos.nombre == "qwe") && (datos.password == "qwe")){
        document.getElementById("containerMainZz").textContent = `Bienvenido ${name}`
        document.getElementById("form").style.display = "none"
        document.getElementById("fondoMain2").innerHTML = ``

        document.getElementById("btnBack").style.display = "flex"
        document.getElementById("btnBack").addEventListener("click",(back()))
    } 
    
    else if ((datos.nombre == "zxc") && (datos.password == "zxc")){
        document.getElementById("containerMainZz").textContent = `Bienvenido ${name}`
        document.getElementById("form").style.display = "none"
        document.getElementById("fondoMain2").innerHTML = ``

        document.getElementById("btnBack").style.display = "flex" 
        document.getElementById("btnBack").addEventListener("click",(back())) }

        // Mediante esta estructura condicional valido que no esten vacíos los 2 inputs

    else if ((datos.nombre == "") || (datos.password == "")){
            document.getElementById("containerMainZz").textContent = `Debe completar todos los campos`
            location.reload()
            
            document.getElementById("form").style.display = "none"
            document.getElementById("fondoMain2").innerHTML = ``
    
            document.getElementById("btnBack").style.display = "flex"
            document.getElementById("btnBack").addEventListener("click",(back()))
        } 

    else{
        document.getElementById("form").style.display = "none"
        document.getElementById("containerMainZz").textContent = "Contraseña incorrecta"

        document.getElementById("btnBack").style.display = "flex"
        document.getElementById("btnBack").addEventListener("click",(back()))

    }
})

// Me recarga la página para volver a intentar colocar los datos
const back = () =>{
    document.getElementById("btnBack").addEventListener("click", () => {
        location.reload()
    })

}
