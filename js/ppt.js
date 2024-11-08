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

let manos = [
    {
        mano: "Tijera",
        ruta: "../img/ppt/ppt_1.webp"
    },
    {
        mano: "Piedra",
        ruta: "../img/ppt/ppt_3.webp"
    },
    {
        mano: "Papel",
        ruta: "../img/ppt/ppt_5.webp"
    }
]


const generaNumero = () => {
    return Math.floor(Math.random() * 3);
}

botonesJ.addEventListener('click', (ev) => {
    if (ev.target.closest('#btn-tijera')) {
        jugadaHuman.src = './img/ppt/ppt_2.webp';
        jugadaHuman.name = "Tijera";
        juegaPC()
        compruebaGanador()
    } else if (ev.target.closest('#btn-piedra')) {
        jugadaHuman.src = './img/ppt/ppt_4.webp';
        jugadaHuman.name = "Piedra";
        juegaPC()
        compruebaGanador()
    } else if (ev.target.closest('#btn-papel')) {
        jugadaHuman.src = './img/ppt/ppt_6.webp';
        jugadaHuman.name = "Papel";
        juegaPC()
        compruebaGanador()
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
    reseteoJuego();
    timeout = setTimeout(() => {
        deshabilitaBootones()
        clearInterval(intervalo);
        btn_comenzar.removeAttribute('disabled');
        clearTimeout(timeout);
    }, 31000)
    intervalo = setInterval(() => {
        tiempo.innerText = parseInt(tiempo.innerText) - 1;
    }, 1000)
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
    pcEstado.src = "../img/malvado.gif"
    humanEstado.src = "../img/malvado.gif"
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
const seteaImagen = (ganador) => {
    switch (ganador) {
        case "PC":
            pcEstado.src = '../img/acerto.gif';
            humanEstado.src = '../img/pifio.gif';
            puntosPc.innerText = parseInt(puntosPc.innerText) + 100;
            break;
        case "HUMAN":
            humanEstado.src = '../img/acerto.gif';
            pcEstado.src = '../img/pifio.gif';
            puntosHuman.innerText = parseInt(puntosHuman.innerText) + 100;
            break;
        case "EMPATE":
            pcEstado.src = '../img/malvado.gif';
            humanEstado.src = '../img/malvado.gif';
            puntosPc.innerText = parseInt(puntosPc.innerText) + 50;
            puntosHuman.innerText = parseInt(puntosHuman.innerText) + 50;
            break;
    }
}
btn_comenzar.addEventListener('click', comienzaJuego);