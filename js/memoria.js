const cartas = [
    {
        ruta: "./cartas/carta_01.webp",
        nombre: "carta_01"
    },
    {
        ruta: "./cartas/carta_02.webp",
        nombre: "carta_01"
    },
    {
        ruta: "./cartas/carta_03.webp",
        nombre: "carta_02"
    },
    {
        ruta: "./cartas/carta_04.webp",
        nombre: "carta_02"
    },
    {
        ruta: "./cartas/carta_05.webp",
        nombre: "carta_03"
    },
    {
        ruta: "./cartas/carta_06.webp",
        nombre: "carta_03"
    },
    {
        ruta: "./cartas/carta_07.webp",
        nombre: "carta_04"
    },
    {
        ruta: "./cartas/carta_08.webp",
        nombre: "carta_04"
    },
    {
        ruta: "./cartas/carta_09.webp",
        nombre: "carta_05"
    },
    {
        ruta: "./cartas/carta_10.webp",
        nombre: "carta_05"
    },
    {
        ruta: "./cartas/carta_11.webp",
        nombre: "carta_06"
    },
    {
        ruta: "./cartas/carta_12.webp",
        nombre: "carta_06"
    },
    {
        ruta: "./cartas/carta_13.webp",
        nombre: "carta_07"
    },
    {
        ruta: "./cartas/carta_14.webp",
        nombre: "carta_07"
    },
    {
        ruta: "./cartas/carta_15.webp",
        nombre: "carta_08"
    },
    {
        ruta: "./cartas/carta_16.webp",
        nombre: "carta_08"
    },
    {
        ruta: "./cartas/carta_17.webp",
        nombre: "carta_09"
    },
    {
        ruta: "./cartas/carta_18.webp",
        nombre: "carta_09"
    },
    {
        ruta: "./cartas/carta_19.webp",
        nombre: "carta_10"
    },
    {
        ruta: "./cartas/carta_20.webp",
        nombre: "carta_10"
    }
]
const vistaCartas = document.querySelectorAll('.juego IMG');
const cabecera = document.querySelector('.cabecera');
const espaciador = document.querySelector('.espaciador');


const juego = document.querySelector('.juego');
const barajarSound = new Audio('./music/barajar.mp3');
const correcto = new Audio('./music/correcto.mp3');
const incorrecto = new Audio('./music/incorrecto.mp3');
const flipCarta = new Audio('./music/flipcard.mp3');

// const btnComenzar = document.getElementById('comenzar');
const reiniciar = document.getElementById('reiniciar');
const puntaje = document.getElementById('puntaje');
const usuario = document.getElementById('usuario');
const tiempo = document.getElementById('tiempo');

//sonidos
const fondoCartas = new Audio('./music/fondocartas.mp3')

function barajar() {
    ejecutaSonido(barajarSound);
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }

    let indice = 0;
    reset()
    const barajando = setInterval(() => {
        vistaCartas[indice].style.display = "flex";
        vistaCartas[indice].closest('.juego_carta').classList.add('mostrar');
        if (indice === vistaCartas.length - 1) {
            indice = 0;
            clearInterval(barajando);
        }
        indice++;
    }, 170)
    fondoCartas.loop = true;
    ejecutaSonido(fondoCartas);

}

const reset = () => {
    vistaCartas.forEach(carta => {
        carta.style.display = "none";
        carta.classList.remove('carta_mod');
        carta.closest('.juego_carta').classList.remove('mostrar', 'carta_mod2');
    })
    clearInterval(temporizador);
    tiempo.innerText = 0;
    puntaje.innerText = 0;
}

const cargarCartas = () => {
    for (let i = 0; i < cartas.length; i++) {
        vistaCartas[i].src = cartas[i].ruta;
        vistaCartas[i].name = cartas[i].nombre;
    }
}


cartaSalida = [];
juego.addEventListener('click', (ev) => {
    vistaCartas.forEach(carta => {
        if (ev.target.closest('.juego_carta')) {
            ev.target.classList.add("carta_mod2");
            ev.target.querySelector('img').classList.add("carta_mod");
            ejecutaSonido(flipCarta);
        }
    })
    if (ev.target.closest('.juego_carta')) {
        cartaSalida.push(ev.target.querySelector('img'));
    }


    if (cartaSalida.length === 2) {
        console.log(cartaSalida.length)
        juego.setAttribute('disabled', 'true');
        if (compruebaPares()) {
            ejecutaSonido(correcto);
            puntaje.innerText = parseInt(puntaje.innerText) + 100;
        } else {
            cartaSalida.forEach(carta => {
                setTimeout(() => {
                    carta.classList.remove('carta_mod');
                    carta.closest('.juego_carta').classList.remove('carta_mod2');
                }, 600)
            });
            ejecutaSonido(incorrecto);
        }
        cartaSalida.length = 0;

    }
})

const compruebaPares = () => {
    return cartaSalida[0].name === cartaSalida[1].name;
}


function ejecutaSonido(sonido) {
    sonido.currentTime = 0;
    sonido.play();
}

let temporizador;
const tiempoTranscurrido = () => {
    temporizador = setInterval(() => {
        tiempo.innerText = parseInt(tiempo.innerText) + 1
        if (parseInt(puntaje.innerText) === 1000) {
            fondoCartas.pause();
            clearInterval(temporizador);
            alert(`Bien hecho obtuviste 1000 puntos en ${tiempo.innerText} segundos`)
            reset();
        }
    }, 1000)
}


const setUsuario = () => {
    usuario.innerText = prompt("Ingresa tu nombre");
    if (usuario.innerText === '') {
        usuario.innerText = "Cerebrito";
    }
}

comenzar.addEventListener('click', (ev) => {
    setUsuario()
    barajar()
    cargarCartas()
    comenzar.setAttribute('disabled', 'true');
    setTimeout(() => {
        tiempoTranscurrido();
    }, 3000)
})
reiniciar.addEventListener('click', () => {
    comenzar.removeAttribute('disabled');
    reset();
})