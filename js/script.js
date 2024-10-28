const ayuda = document.getElementById('ayuda');
const nombre = document.getElementById('tdnombre');
const apellido = document.getElementById('tdapellido');
const email = document.getElementById('tdemail');
const telefono = document.getElementById('tdtelefono');
const edad = document.getElementById('tdedad');
const direccion = document.getElementById('tddireccion');
const provincia = document.getElementById('tdprovincia');
const codigopostal = document.getElementById('tdcodigopostal');
const contacto = document.getElementById('tdcontacto');
const suscripcion = document.getElementById('tdsuscripcion');

function quitarAyuda() {
    ayuda.style.display = "none";
}

function rellenaCampo(name, valor) {
    const elemento = document.getElementById('td' + name);
    if (name === 'suscripcion') {
        elemento.innerText += ' ' + valor;
        return;
    }
    elemento.innerText = valor;
}
