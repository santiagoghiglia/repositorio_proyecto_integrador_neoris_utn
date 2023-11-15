document.addEventListener("DOMContentLoaded", () => {
    var btnSiguiente = document.getElementById("btnSiguiente");
    var btnEnviar = document.getElementById("btnEnviar");

    btnSiguiente.addEventListener("click", () => {
        var formularioProcedimiento = document.getElementById("formularioProcedimiento");
        var elementoActivo = formularioProcedimiento.querySelector(".activo");
        
        var elementoSiguiente = formularioProcedimiento.querySelector(".activo + .oculto");

       
        if (elementoSiguiente) {
            elementoActivo.classList.remove("activo");
            elementoActivo.classList.add("oculto");

            elementoSiguiente.classList.remove("oculto");
            elementoSiguiente.classList.add("activo");
        } else {
            
            btnSiguiente.style.display = 'none';
            btnEnviar.style.display = 'flex';
        }
    });

    btnEnviar.addEventListener("click", () => {
        var nombre = formularioProcedimiento.querySelector("#nombre").value;
        var apellido = formularioProcedimiento.querySelector("#apellido").value;
        var email = formularioProcedimiento.querySelector("#email").value;
        var edad = formularioProcedimiento.querySelector("#edad").value;
        var telefono = formularioProcedimiento.querySelector("#telefono").value;
        var fecha = formularioProcedimiento.querySelector("#fecha").value;
        var presupuesto = formularioProcedimiento.querySelector("#presupuesto").value;

        console.log("El nombre es: " + nombre);
        console.log("El apellido es: " + apellido);
        console.log("La edad es: " + edad);
        console.log("El telefono es: " + telefono);
        console.log("El email es: " + email);        
        console.log("La fecha es: " + fecha);
        console.log("Te vamos a ayudar con: " + presupuesto);
        

        var resumenFormularioProcedimiento = document.getElementById("resumenFormularioProcedimiento");
        resumenFormularioProcedimiento.innerText = "Resumen del formulario:<br>" +
                                                    "Nombre: " + nombre + "<br>" +
                                                    "Apellido: " + apellido + "<br>" +
                                                    "Edad: " + edad + "<br>" +
                                                    "Email: " + email + "<br>" +
                                                    "Telefono: " + telefono + "<br>" +
                                                    "El dia: " + fecha + "<br>" +
                                                    "Te vamos a ayudar con: " + presupuesto +"<br>";
                                                    });
});