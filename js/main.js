document.addEventListener("DOMContentLoaded", () => {
    var btnSiguiente = document.getElementById("btnSiguiente");
    btnSiguiente.addEventListener("click", () => {
        var formularioProcedimiento = document.getElementById("formularioProcedimiento");
        var elementoActivo = formularioProcedimiento.querySelector(".activo");
        console.log("elementoActivo");
        
        var elementoSiguiente = formularioProcedimiento.querySelector(".activo + .oculto");
        
       
        elementoActivo.classList.remove("activo");
        elementoActivo.classList.add("oculto");

        elementoSiguiente.classList.remove("oculto");
        elementoSiguiente.classList.add("activo");

    });

    var btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener("click", () => {
        var formularioProcedimiento = document.getElementById("formularioProcedimiento");
        
        var nombre = formularioProcedimiento.querySelector("#nombre");
        var apellido = formularioProcedimiento.querySelector("#apellido");
        var email = formularioProcedimiento.querySelector("#email");
        var edad = formularioProcedimiento.querySelector("#edad");

        console.log("El nombre es: " + nombre.value);
        console.log("El email es: " + email.value);

        var resumenFormularioProcedimiento = document.getElementById("resumenFormularioProcedimiento");
        resumenFormularioProcedimiento.innerText = "El nombre es: " + nombre.value;
    });
});
