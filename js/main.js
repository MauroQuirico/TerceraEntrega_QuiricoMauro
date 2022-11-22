//constante donde se aloja el valor de los datos de inicio que se usaran mas adelante
const user = "admin";
const pass = "12345";

//arrays para alojar el valor de cada turno
const mañana = [];
const tarde = [];
const noche = [];

//se verifican por medio de un bucle FOR los datos de inicio, solo hay 3 intentos en caso de equivocarse los 3 intentos se sale del ciclo
function inicioSesion() {
    let datoSesion = false;
    for (let i = 2; i >= 0; i--) {
        let userEnter = prompt("Ingresa tu nombre de usuario");
        let passEnter = prompt("Ingresa tu codigo de seguridad")
        //se realiza la comparacion de valores para inicio, se usa .toLowerCase() para que siempre el valor de nick sea en minusculas
        if (userEnter.toLowerCase() == user && passEnter == pass) {
            alert("Bienvenido, los datos ingresados son correctos")
            datoSesion = true;
            break;
        } else {
            alert("Acceso denegado, te quedan " + i + "" + "intentos");
        }
    }
    return datoSesion;
}
let estado = inicioSesion();
let total = 0;
if (estado) {
    let opciones = prompt("Elegi una opcion: \n1 - Turno mañana. \n2 - Turno tarde. \n3 - Turno noche. \n4 - Total \n Presione Z para salir");
    while (opciones != "Z" && opciones != "z") {
        //se utiliza el switch para que el usuario elija la opcion de ingresar valor o ver el total, en caso de ingresar el valor es enviado por .push() a un array segun la opcion elegida
        switch (opciones) {
            case "1":
                mañana.push(parseInt(prompt("ingrese un valor")));
                break;
            case "2":
                tarde.push(parseInt(prompt("ingrese un valor")));
                break;
            case "3":
                noche.push(parseInt(prompt("ingrese un valor")));
                break;
            case "4":
                //se descompone todos los arrays en uno, se utilisa reduce() para sumar los elementos y se asigna el valor a la variable "total"
                total = [...mañana, ...tarde, ...noche].reduce((acc, value) => acc + value);
                alert("el ingreso total es " + total);
                break;
            default:
                alert("La opcion ingresada no es correcta");
                break;
        }
        opciones = prompt("Queres realizar algun cambio? \n1 - Turno mañana. \n2 - Turno tarde. \n3 - Turno noche. \n4 - Total \n Presione Z para salir");
    }
    //se muestra este mensaje en caso de colocar 3 veces los datos de inicio incorrectos
} else {
    alert("Los datos de usuarios no son correctos, no puedes ingresar.");
}