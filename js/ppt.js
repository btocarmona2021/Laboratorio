const contador = document.getElementById('contador');
const btn_comenzar = document.getElementById('btn_comenzar');
const puntosPc = document.getElementById('player-pc__puntos');
const puntosHuman = document.getElementById('player-human__puntos');
const jugadaPC = document.getElementById('pc-jugada');
const pcEstado = document.getElementById('pc-estado');
const jugadaHuman = document.getElementById('human-jugada');
const humanEstado = document.getElementById('human-estado');
const botonesJ = document.querySelector('.botones');
const btnTijera = document.querySelector('#btn-tijera');
const btnPiedra = document.querySelector('#btn-piedra');
const btnPapel = document.querySelector('#btn-papel');
const tiempo = document.getElementById('tiempo');
//sonidos
const music = new Audio('./music/musicbackground.mp3');
const ganar = new Audio('./music/ganar.mp3');
const iniciar = new Audio('./music/iniciar.mp3');
const perder = new Audio('./music/perder.mp3');
const terminar = new Audio('./music/terminar.mp3');
const pierdefinal = new Audio('./music/pierdefinal.mp3');
const ppt = new Audio('./music/ppt.mp3');
const empate = new Audio('./music/empate.mp3');
const campeon = new Audio('./music/campeon.mp3');


let manos = [
    {
        mano: "Tijera",
        ruta: "./img/ppt/ppt_1.webp"
    },
    {
        mano: "Piedra",
        ruta: "./img/ppt/ppt_3.webp"
    },
    {
        mano: "Papel",
        ruta: "./img/ppt/ppt_5.webp"
    }
]


const generaNumero = () => {
    return Math.floor(Math.random() * 3);
}

let accion;
botonesJ.addEventListener('click', (ev) => {
    if (ev.target.closest('#btn-tijera')) {
        seteaImagen('PPT')
        ejecutaSonido(ppt);
        accion = setTimeout(() => {
            jugadaHuman.src = './img/ppt/ppt_2.webp';
            jugadaHuman.name = "Tijera";
            juegaPC()
            compruebaGanador()
        }, 1200);
    } else if (ev.target.closest('#btn-piedra')) {
        seteaImagen('PPT')
        ejecutaSonido(ppt);
        accion = setTimeout(() => {
            jugadaHuman.src = './img/ppt/ppt_4.webp';
            jugadaHuman.name = "Piedra";
            juegaPC()
            compruebaGanador()
        }, 1200);
    } else if (ev.target.closest('#btn-papel')) {
        seteaImagen('PPT')
        ejecutaSonido(ppt);
        accion = setTimeout(() => {
            jugadaHuman.src = './img/ppt/ppt_6.webp';
            jugadaHuman.name = "Papel";
            juegaPC()
            compruebaGanador()
        }, 1200);
    }
})

const juegaPC = () => {
    let indice = generaNumero();
    jugadaPC.src = manos[indice].ruta;
    jugadaPC.name = manos[indice].mano;
}


let timeout;
let intervalo;
const comienzaJuego = () => {
    btn_comenzar.setAttribute('disabled', 'true');
    iniciar.volume = 0.5;
    ejecutaSonido(iniciar)
    ejecutaSonido(music);
    reseteoJuego();
    timeout = setTimeout(() => {
        deshabilitaBootones()
        clearInterval(intervalo);
        btn_comenzar.removeAttribute('disabled');
        clearTimeout(timeout);
        compruebaFinal();
    }, 31000)
    intervalo = setInterval(() => {
        tiempo.innerText = parseInt(tiempo.innerText) - 1;
    }, 1000)
}

const ejecutaSonido = (sonido) => {
    sonido.currentTime = 0;
    sonido.play();
}

const deshabilitaBootones = () => {
    btnTijera.setAttribute('disabled', 'true');
    btnPiedra.setAttribute('disabled', 'true');
    btnPapel.setAttribute('disabled', 'true');
}
const habilitaBootones = () => {
    btnTijera.removeAttribute('disabled');
    btnPiedra.removeAttribute('disabled');
    btnPapel.removeAttribute('disabled');
}

const reseteoJuego = () => {
    puntosPc.innerText = "0"
    puntosHuman.innerText = "0"
    tiempo.innerText = "30"
    pcEstado.src = "./img/malvado.gif"
    humanEstado.src = "./img/malvado.gif"
    habilitaBootones()
    clearInterval(intervalo);
    clearTimeout(timeout);
    jugadaPC.src = './img/ppt/back.png'
    jugadaHuman.src = './img/ppt/back.png'
}

const compruebaGanador = () => {
    const resultados = {
        'Tijera-Papel': 'PC',
        'Tijera-Piedra': 'HUMAN',
        'Tijera-Tijera': 'EMPATE',
        'Piedra-Papel': 'HUMAN',
        'Piedra-Tijera': 'PC',
        'Piedra-Piedra': 'EMPATE',
        'Papel-Piedra': 'PC',
        'Papel-Tijera': 'HUMAN',
        'Papel-Papel': 'EMPATE'
    };
    const ganador = resultados[`${jugadaPC.name}-${jugadaHuman.name}`];
    seteaImagen(ganador);
}
const compruebaFinal = () => {
    if (parseInt(puntosPc.innerText) < parseInt(puntosHuman.innerText)) {
        ejecutaSonido(campeon);
    } else {
        ejecutaSonido(pierdefinal);
    }
}

const seteaImagen = (ganador) => {
    switch (ganador) {
        case "PC":
            pcEstado.src = './img/acerto.gif';
            humanEstado.src = './img/pifio.gif';
            puntosPc.innerText = parseInt(puntosPc.innerText) + 100;
            ejecutaSonido(perder)
            break;
        case "HUMAN":
            humanEstado.src = './img/acerto.gif';
            pcEstado.src = './img/pifio.gif';
            puntosHuman.innerText = parseInt(puntosHuman.innerText) + 100;
            ejecutaSonido(ganar);
            break;
        case "EMPATE":
            pcEstado.src = './img/malvado.gif';
            humanEstado.src = './img/malvado.gif';
            puntosPc.innerText = parseInt(puntosPc.innerText) + 50;
            puntosHuman.innerText = parseInt(puntosHuman.innerText) + 50;
            ejecutaSonido(empate);
            break;
        case"PPT":
            jugadaPC.src = "./img/ppt/back.png"
            jugadaHuman.src = "./img/ppt/back.png"
            break;
    }
}
btn_comenzar.addEventListener('click', comienzaJuego);