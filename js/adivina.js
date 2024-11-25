// Genero un número aleatorio entre 1 y 100

const principal_intro = document.querySelector('.principal__intro');
const boton_comenzar = document.getElementById('juego__comenzar');
const gif_numero = document.getElementById('juego__gif');
const numeroAleatorio
    = document.getElementById('juego__num--generado');
const juego_insercion = document.querySelector('.juego__insercion');
const juego_numero = document.getElementById('juego__numero');
const estado = document.getElementById('juego__estado');
const boton_comprobar = document.getElementById('juego__comprobar');

let intentos = 5;
let nuemroAleatorio
    = 0;


const comenzar_juego = () => {
    principal_intro.style.display = 'none';
    boton_comenzar.setAttribute("disabled", "true");
    nuemroAleatorio
        = Math.floor(Math.random() * 100) + 1;
    gif_numero.style.display = 'block';
    numeroAleatorio
        .innerText = 'Aguarde...Estoy pensando un número para volver a jugar !Suerte Nuevamente!'
    setTimeout(() => {
        gif_numero.style.display = 'none';
        numeroAleatorio
            .innerText = 'Ya lo pensé, puedes comenzar tienes 5 intentos. ¡ Buena Suerte!'
        numeroAleatorio
            .style.display = 'block';
        estado.src = './img/pensando.gif'
        juego_insercion.style.display = 'flex';
        boton_comprobar.style.display = 'block';
        juego_numero.focus();
    }, 3000);
}


boton_comprobar.addEventListener('click', () => {
    if (intentos > 0) {
        if (nuemroAleatorio
            < parseInt(juego_numero.value)) {
            numeroAleatorio
                .innerText = `Intenta con un numero mas chico,te quedan ${intentos -= 1} intentos`
            estado.src = './img/pifio.gif';
            setTimeout(() => {
                estado.src = './img/pensando.gif';
            }, 500)
            if (intentos === 0) {
                boton_comprobar.click();
            }
        } else if (nuemroAleatorio
            > parseInt(juego_numero.value)) {
            numeroAleatorio
                .innerText = `Intenta con un numero mas grande,te quedan ${intentos -= 1} intentos`
            estado.src = './img/pifio.gif';
            setTimeout(() => {
                estado.src = './img/pensando.gif';
            }, 500)
            if (intentos === 0) {
                boton_comprobar.click();
            }
        } else if (nuemroAleatorio
            === parseInt(juego_numero.value)) {
            numeroAleatorio
                .innerText = `Genioo acertaste justo habia pensado el ${nuemroAleatorio
            } aún te quedaban ${intentos} intentos`
            estado.src = './img/acerto.gif';
            setTimeout(() => {
                estado.src = './img/acerto.gif';
                juego_insercion.style.display = 'none'
                boton_comenzar.removeAttribute("disabled");
                boton_comprobar.style.display = 'none';
                numeroAleatorio
                    .innerText = 'Quieres volver a jugar , esta vez no acertarás 🤣';
                estado.style.display = 'block';
                intentos = 5;
            }, 3000)
        }

    } else {
        numeroAleatorio
            .innerText = 'No te quedan más intentos ¡Lo siento 😪! Comienza de nuevo'
        estado.src = './img/perdio.gif';
        setTimeout(() => {
            boton_comenzar.removeAttribute("disabled");
            boton_comprobar.style.display = 'none';
            juego_insercion.style.display = 'none';
            intentos = 5;
        }, 4000)
    }
});


boton_comenzar.addEventListener('click', comenzar_juego)