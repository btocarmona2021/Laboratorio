//ARRAY DE PREGUNTAS SOBRE HTML
const preguntas = [
    {
        pregunta: "¿Qué significa HTML?",
        opciones: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        respuesta: "Hyper Text Markup Language"
    },
    {
        pregunta: "¿Cuál es la etiqueta para insertar un salto de línea en HTML?",
        opciones: ["<hr>", "<br>", "<line>"],
        respuesta: "<br>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para definir una lista desordenada?",
        opciones: ["<ul>", "<ol>", "<li>"],
        respuesta: "<ul>"
    },
    {
        pregunta: "¿Qué atributo se usa para agregar un texto alternativo a una imagen?",
        opciones: ["title", "alt", "src"],
        respuesta: "alt"
    },
    {
        pregunta: "¿Cuál es la etiqueta adecuada para definir una tabla en HTML?",
        opciones: ["<div>", "<table>", "<form>"],
        respuesta: "<table>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para definir una fila en una tabla?",
        opciones: ["<tr>", "<td>", "<th>"],
        respuesta: "<tr>"
    },
    {
        pregunta: "¿Cuál es la etiqueta correcta para definir un encabezado de tabla?",
        opciones: ["<th>", "<tr>", "<td>"],
        respuesta: "<th>"
    },
    {
        pregunta: "¿Cuál es el propósito del atributo `href` en un enlace?",
        opciones: ["Definir el color del enlace", "Especificar la URL de destino", "Agregar un estilo al enlace"],
        respuesta: "Especificar la URL de destino"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un formulario en HTML?",
        opciones: ["<form>", "<input>", "<fieldset>"],
        respuesta: "<form>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<form>` especifica la URL a la que se enviará la información?",
        opciones: ["action", "method", "submit"],
        respuesta: "action"
    },
    {
        pregunta: "¿Cuál es la etiqueta utilizada para definir un área de texto en un formulario?",
        opciones: ["<textarea>", "<input type='text'>", "<field>"],
        respuesta: "<textarea>"
    },
    {
        pregunta: "¿Qué atributo se usa en la etiqueta `<img>` para definir la ruta de la imagen?",
        opciones: ["src", "href", "path"],
        respuesta: "src"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para incluir un script de JavaScript en un documento HTML?",
        opciones: ["<js>", "<javascript>", "<script>"],
        respuesta: "<script>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se usa para definir un elemento de lista en una lista no ordenada?",
        opciones: ["<ul-item>", "<item>", "<li>"],
        respuesta: "<li>"
    },
    {
        pregunta: "¿Qué atributo se utiliza en la etiqueta `<input>` para establecer un valor predeterminado?",
        opciones: ["default", "value", "placeholder"],
        respuesta: "value"
    },
    {
        pregunta: "¿Cuál es el propósito de la etiqueta `<title>` en un documento HTML?",
        opciones: ["Crear un encabezado", "Vincular estilos CSS", "Definir el título del documento"],
        respuesta: "Definir el título del documento"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para representar un contenido que no es un bloque en HTML?",
        opciones: ["<inline>", "<span>", "<div>"],
        respuesta: "<span>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se utiliza para incluir comentarios en el código HTML?",
        opciones: ["<!-- -->", "<comment>", "<#>"],
        respuesta: "<!-- -->"
    },
    {
        pregunta: "¿Qué atributo se utiliza en la etiqueta `<audio>` para permitir que el audio se reproduzca en bucle?",
        opciones: ["repeat", "autoplay", "loop"],
        respuesta: "loop"
    },
    {
        pregunta: "¿Qué etiqueta HTML se utiliza para definir un campo de entrada para el correo electrónico?",
        opciones: ["<email>", "<input type='email'>", "<input type='text'>"],
        respuesta: "<input type='email'>"
    },
    {
        pregunta: "¿Cuál es la etiqueta utilizada para incluir un archivo de hoja de estilos CSS en un documento HTML?",
        opciones: ["<css>", "<style>", "<link>"],
        respuesta: "<link>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un bloque de citas largas?",
        opciones: ["<quote>", "<blockquote>", "<cita>"],
        respuesta: "<blockquote>"
    },
    {
        pregunta: "¿Cuál es el propósito de la etiqueta `<footer>`?",
        opciones: ["Crear un encabezado", "Definir el pie de página de un documento", "Insertar enlaces externos"],
        respuesta: "Definir el pie de página de un documento"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<input>` se usa para definir un campo de contraseña?",
        opciones: ["type='secret'", "type='password'", "type='text'"],
        respuesta: "type='password'"
    },
    {
        pregunta: "¿Qué etiqueta HTML se utiliza para crear un contenedor que no tiene un significado semántico específico?",
        opciones: ["<span>", "<section>", "<div>"],
        respuesta: "<div>"
    },
    {
        pregunta: "¿Qué atributo se usa en la etiqueta `<link>` para definir el tipo de documento vinculado?",
        opciones: ["rel", "href", "type"],
        respuesta: "type"
    },
    {
        pregunta: "¿Cuál es la etiqueta para definir un elemento de lista dentro de una lista ordenada?",
        opciones: ["<li>", "<ol-item>", "<list>"],
        respuesta: "<li>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un menú de contexto en HTML?",
        opciones: ["<list>", "<menu>", "<options>"],
        respuesta: "<menu>"
    },
    {
        pregunta: "¿Qué atributo se utiliza en la etiqueta `<form>` para especificar el método de envío?",
        opciones: ["action", "type", "method"],
        respuesta: "method"
    },
    {
        pregunta: "¿Cuál es la etiqueta HTML utilizada para definir un enlace externo?",
        opciones: ["<link>", "<a>", "<url>"],
        respuesta: "<a>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se utiliza para definir un comentario en HTML?",
        opciones: ["<!-- -->", "<comment>", "<#>"],
        respuesta: "<!-- -->"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<iframe>` se utiliza para especificar la URL que se mostrará dentro del marco?",
        opciones: ["src", "href", "link"],
        respuesta: "src"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se utiliza para insertar un salto de línea en HTML?",
        opciones: ["<nl>", "<line>", "<br>"],
        respuesta: "<br>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para crear un encabezado de segundo nivel?",
        opciones: ["<header2>", "<h2>", "<h1>"],
        respuesta: "<h2>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se utiliza para crear un formulario de búsqueda?",
        opciones: ["<search>", "<form>", "<input type='search'>"],
        respuesta: "<form>"
    },
    {
        pregunta: "¿Qué atributo se utiliza en la etiqueta `<meta>` para especificar el conjunto de caracteres del documento?",
        opciones: ["charset", "content", "type"],
        respuesta: "charset"
    },
    {
        pregunta: "¿Qué elemento se utiliza para definir un área de contenido que debe ser resaltada?",
        opciones: ["<highlight>", "<mark>", "<em>"],
        respuesta: "<mark>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se usa para crear una tabla en HTML?",
        opciones: ["<grid>", "<tab>", "<table>"],
        respuesta: "<table>"
    },
    {
        pregunta: "¿Qué atributo se utiliza para especificar el nombre de un campo en un formulario?",
        opciones: ["name", "id", "label"],
        respuesta: "name"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un botón en HTML?",
        opciones: ["<input type='button'>", "<button>", "<btn>"],
        respuesta: "<button>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para crear una lista ordenada?",
        opciones: ["<ul>", "<ol>", "<list>"],
        respuesta: "<ol>"
    },
    {
        pregunta: "¿Cuál de las siguientes etiquetas se utiliza para definir un elemento de encabezado en HTML?",
        opciones: ["<h1>", "<header>", "<title>"],
        respuesta: "<h1>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para crear un campo de entrada que solo permite números?",
        opciones: ["<input type='number'>", "<input type='digit'>", "<input type='text'>"],
        respuesta: "<input type='number'>"
    },
    {
        pregunta: "¿Cuál es la etiqueta utilizada para definir una imagen en HTML?",
        opciones: ["<picture>", "<img>", "<image>"],
        respuesta: "<img>"
    },
    {
        pregunta: "¿Qué atributo se utiliza para especificar el tamaño de la fuente en un elemento `<font>`?",
        opciones: ["size", "font-size", "text-size"],
        respuesta: "size"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para representar texto en formato de párrafo?",
        opciones: ["<p>", "<text>", "<para>"],
        respuesta: "<p>"
    },
    {
        pregunta: "¿Qué atributo se usa en la etiqueta `<video>` para permitir que se reproduzca automáticamente al cargar?",
        opciones: ["autoplay", "controls", "loop"],
        respuesta: "autoplay"
    },
    {
        pregunta: "¿Qué elemento HTML se utiliza para crear una lista no ordenada?",
        opciones: ["<ul>", "<ol>", "<list>"],
        respuesta: "<ul>"
    },
    {
        pregunta: "¿Cuál es la función de la etiqueta `<meta>` en un documento HTML?",
        opciones: ["Proporcionar metadatos sobre el documento", "Definir estilos CSS", "Vincular scripts externos"],
        respuesta: "Proporcionar metadatos sobre el documento"
    },
    {
        pregunta: "¿Qué atributo se utiliza para definir el valor máximo en un campo de entrada de tipo número?",
        opciones: ["max", "value", "limit"],
        respuesta: "max"
    }
    ,
    {
        pregunta: "¿Cuál es la etiqueta para crear un enlace de anclaje dentro de una misma página?",
        opciones: ["<a>", "<link>", "<anchor>"],
        respuesta: "<a>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<img>` se utiliza para especificar texto alternativo?",
        opciones: ["alt", "title", "src"],
        respuesta: "alt"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un área sensible en una imagen?",
        opciones: ["<area>", "<map>", "<imgmap>"],
        respuesta: "<area>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que permite definir una sección de navegación en un documento?",
        opciones: ["<nav>", "<section>", "<menu>"],
        respuesta: "<nav>"
    },
    {
        pregunta: "¿Qué atributo se usa para especificar la dirección URL de un enlace en una etiqueta `<a>`?",
        opciones: ["href", "src", "link"],
        respuesta: "href"
    },
    {
        pregunta: "¿Cuál de los siguientes elementos HTML se utiliza para crear una opción en un menú desplegable?",
        opciones: ["<option>", "<select>", "<dropdown>"],
        respuesta: "<option>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para dividir el contenido de una página en secciones semánticas?",
        opciones: ["<section>", "<div>", "<article>"],
        respuesta: "<section>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<link>` se usa para definir la relación entre el documento HTML y el recurso vinculado?",
        opciones: ["rel", "href", "type"],
        respuesta: "rel"
    },
    {
        pregunta: "¿Cuál es la función de la etiqueta `<base>` en un documento HTML?",
        opciones: ["Definir la URL base para todos los enlaces relativos", "Establecer el título de la página", "Vincular estilos CSS"],
        respuesta: "Definir la URL base para todos los enlaces relativos"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un contenedor para elementos en línea?",
        opciones: ["<span>", "<div>", "<inline>"],
        respuesta: "<span>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un subrayado en texto?",
        opciones: ["<u>", "<underline>", "<sub>"],
        respuesta: "<u>"
    },
    {
        pregunta: "¿Cuál es la etiqueta correcta para definir una celda en una tabla?",
        opciones: ["<td>", "<th>", "<tr>"],
        respuesta: "<td>"
    },
    {
        pregunta: "¿Qué elemento se utiliza para agregar subtítulos o descripciones a tablas?",
        opciones: ["<caption>", "<title>", "<summary>"],
        respuesta: "<caption>"
    },
    {
        pregunta: "¿Qué etiqueta HTML se usa para insertar un script de JavaScript en una página?",
        opciones: ["<script>", "<code>", "<js>"],
        respuesta: "<script>"
    },
    {
        pregunta: "¿Qué atributo se utiliza en la etiqueta `<script>` para cargar un archivo de manera asíncrona?",
        opciones: ["async", "defer", "src"],
        respuesta: "async"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir contenido flotante, como citas o anuncios?",
        opciones: ["<aside>", "<blockquote>", "<float>"],
        respuesta: "<aside>"
    },
    {
        pregunta: "¿Cuál es la función de la etiqueta `<label>` en un formulario?",
        opciones: ["Enlazar texto con un campo de formulario", "Definir un campo de entrada", "Crear un título de formulario"],
        respuesta: "Enlazar texto con un campo de formulario"
    },
    {
        pregunta: "¿Qué atributo se utiliza en un `<input>` para relacionarlo con una etiqueta `<label>`?",
        opciones: ["for", "id", "name"],
        respuesta: "id"
    },
    {
        pregunta: "¿Cuál es la etiqueta semántica para definir una cita en línea?",
        opciones: ["<q>", "<cite>", "<blockquote>"],
        respuesta: "<q>"
    },
    {
        pregunta: "¿Qué elemento HTML se usa para incluir un contenido que es solo legible por motores de búsqueda y lectores de pantalla?",
        opciones: ["<span>", "<aria>", "<noscript>"],
        respuesta: "<noscript>"
    },
    {
        pregunta: "¿Qué etiqueta HTML se utiliza para definir un formulario interactivo?",
        opciones: ["<form>", "<fieldset>", "<input>"],
        respuesta: "<form>"
    },
    {
        pregunta: "¿Qué atributo se utiliza para hacer que una opción de un formulario esté seleccionada por defecto?",
        opciones: ["selected", "checked", "default"],
        respuesta: "selected"
    },
    {
        pregunta: "¿Cuál es la etiqueta que se utiliza para representar texto que ha sido eliminado?",
        opciones: ["<del>", "<s>", "<strike>"],
        respuesta: "<del>"
    },
    {
        pregunta: "¿Qué elemento HTML se utiliza para crear una lista de definición?",
        opciones: ["<dl>", "<ol>", "<ul>"],
        respuesta: "<dl>"
    },
    {
        pregunta: "¿Cuál es la etiqueta que define un término en una lista de definición?",
        opciones: ["<dt>", "<dd>", "<df>"],
        respuesta: "<dt>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para incluir un archivo de audio en una página web?",
        opciones: ["<audio>", "<sound>", "<media>"],
        respuesta: "<audio>"
    },
    {
        pregunta: "¿Qué atributo se utiliza para reproducir automáticamente un archivo de audio al cargar la página?",
        opciones: ["autoplay", "controls", "loop"],
        respuesta: "autoplay"
    },
    {
        pregunta: "¿Cuál es la etiqueta semántica que se utiliza para el contenido principal de un documento?",
        opciones: ["<main>", "<section>", "<body>"],
        respuesta: "<main>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<textarea>` se usa para definir el número de líneas visibles?",
        opciones: ["rows", "cols", "lines"],
        respuesta: "rows"
    },
    {
        pregunta: "¿Qué etiqueta HTML se usa para definir un contenido importante que debe resaltarse con énfasis fuerte?",
        opciones: ["<strong>", "<b>", "<em>"],
        respuesta: "<strong>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir un área de contenido independiente y con significado en un documento?",
        opciones: ["<section>", "<div>", "<article>"],
        respuesta: "<article>"
    },
    {
        pregunta: "¿Cuál es la etiqueta semántica que se usa para definir la barra de navegación de un sitio web?",
        opciones: ["<nav>", "<menu>", "<header>"],
        respuesta: "<nav>"
    },
    {
        pregunta: "¿Qué etiqueta HTML se usa para representar el pie de página de un documento o sección?",
        opciones: ["<footer>", "<bottom>", "<end>"],
        respuesta: "<footer>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<input>` se utiliza para definir una pista o sugerencia para el usuario?",
        opciones: ["value", "placeholder", "hint"],
        respuesta: "placeholder"
    },
    {
        pregunta: "¿Qué elemento HTML se usa para incrustar contenido de otra fuente, como videos de YouTube?",
        opciones: ["<embed>", "<iframe>", "<object>"],
        respuesta: "<iframe>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para definir encabezados secundarios, como títulos de secciones?",
        opciones: ["<h2>", "<header>", "<title>"],
        respuesta: "<h2>"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para agrupar opciones dentro de un menú desplegable?",
        opciones: ["<optgroup>", "<select>", "<option>"],
        respuesta: "<optgroup>"
    },
    {
        pregunta: "¿Cuál es la etiqueta correcta para definir un campo de entrada de contraseña?",
        opciones: ["<input type='password'>", "<password>", "<input type='secret'>"],
        respuesta: "<input type='password'>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para definir un contenedor para gráficos en HTML?",
        opciones: ["<canvas>", "<svg>", "<graphic>"],
        respuesta: "<canvas>"
    },
    {
        pregunta: "¿Cuál de las siguientes etiquetas se utiliza para mostrar código de programación en la página web?",
        opciones: ["<code>", "<pre>", "<script>"],
        respuesta: "<code>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<input>` se utiliza para definir un campo de entrada de texto obligatorio?",
        opciones: ["required", "placeholder", "mandatory"],
        respuesta: "required"
    },
    {
        pregunta: "¿Cuál es la etiqueta para insertar un video en una página web?",
        opciones: ["<video>", "<media>", "<vid>"],
        respuesta: "<video>"
    },
    {
        pregunta: "¿Qué atributo de la etiqueta `<a>` se usa para especificar que un enlace debe abrirse en una nueva ventana o pestaña?",
        opciones: ["href='_blank'", "target='_blank'", "window='_new'"],
        respuesta: "target='_blank'"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para incluir una hoja de estilos CSS en un documento HTML?",
        opciones: ["<style>", "<link>", "<css>"],
        respuesta: "<link>"
    },
    {
        pregunta: "¿Cuál es el propósito de la etiqueta `<meta charset='UTF-8'>`?",
        opciones: ["Especificar el autor de la página", "Definir el juego de caracteres del documento", "Incluir palabras clave para SEO"],
        respuesta: "Definir el juego de caracteres del documento"
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para definir una lista numerada?",
        opciones: ["<ol>", "<ul>", "<li>"],
        respuesta: "<ol>"
    },
    {
        pregunta: "¿Qué elemento se usa para agrupar contenido en bloque y aplicar estilos con CSS?",
        opciones: ["<div>", "<span>", "<section>"],
        respuesta: "<div>"
    },
    {
        pregunta: "¿Qué etiqueta se usa para crear un botón en HTML?",
        opciones: ["<button>", "<input type='button'>", "Ambas"],
        respuesta: "Ambas"
    },
    {
        pregunta: "¿Qué etiqueta HTML representa un texto en cursiva?",
        opciones: ["<i>", "<em>", "<italic>"],
        respuesta: "<i>"
    },
    {
        pregunta: "¿Qué etiqueta HTML se usa para resaltar texto de manera semántica?",
        opciones: ["<b>", "<strong>", "<mark>"],
        respuesta: "<mark>"
    }
];

const pregunta = document.getElementById('pregunta');
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const opcion3 = document.getElementById('opcion3');
const comenzar = document.getElementById('botones__comenzar');
const resetear = document.getElementById('botones__resetear');
const puntos = document.getElementById('info__puntos');
const cantPreguntas = document.getElementById('pnumero');
const segundosText = document.getElementById('segundos');

const acierto = new Audio('./music/acierto.mp3');
const error = new Audio('./music/error.mp3');
const backsound = new Audio('./music/background.mp3');
const clock = new Audio('./music/clock.mp3');

let intervalo;
let preguntaAleatoria;
let intento;
let segundos = 15;
let segundero;

const comienzaJuego = () => {
    backsound.loop;
    backsound.volume = 0.1;
    clock.volume = 0.1;
    backsound.play();
    comenzar.setAttribute("disabled", "true");
    cantPreguntas.innerText = 1;
    puntos.innerText = 0;
    generaPregunta();
};
const generaPregunta = () => {
    clearInterval(segundero);
    segundos = 15;
    resetOpciones();
    intento = 0;
    preguntaAleatoria = Math.floor(Math.random() * 100);
    pregunta.innerText = preguntas[preguntaAleatoria].pregunta;
    opcion1.innerText = preguntas[preguntaAleatoria].opciones[0];
    opcion2.innerText = preguntas[preguntaAleatoria].opciones[1];
    opcion3.innerText = preguntas[preguntaAleatoria].opciones[2];
    segundero = setInterval(() => {
        segundosText.innerText = segundos;
        segundos -= 1;
        clock.pause()
        clock.currentTime = 0;
        clock.play();
    }, 1000)
    automatiza();
};

const automatiza = () => {
    clearTimeout(intervalo);
    intervalo = setTimeout(() => {
        generaPregunta();
    }, 17000);
};

const resetOpciones = () => {
    [opcion1, opcion2, opcion3].forEach(opcion => {
        opcion.style.backgroundColor = "whitesmoke";
        opcion.removeAttribute("disabled");
        opcion.innerText = "";
    });
    acierto.volume = 0.3;
    error.volume = 0.6;
};

const comprueba = (target) => {
    if (preguntas[preguntaAleatoria].respuesta === target.innerText) {
        puntos.innerText = (parseInt(puntos.innerText) + (intento === 0 ? 10 : intento === 1 ? 5 : 3));
        target.style.backgroundColor = "green";
        acierto.play();
        setTimeout(() => {
            generaPregunta();
            cantPreguntas.innerText = parseInt(cantPreguntas.innerText) + 1;
        }, 1000);
    } else {
        error.play();
        intento++;
        target.style.backgroundColor = "red";
    }
};

[opcion1, opcion2, opcion3].forEach(opcion => {
    opcion.addEventListener('click', (ev) => comprueba(ev.target));
});

comenzar.addEventListener('click', comienzaJuego);

resetear.addEventListener('click', () => {
    clearTimeout(intervalo);
    comenzar.removeAttribute("disabled");
    puntos.innerText = 0;
    cantPreguntas.innerText = 0;
    backsound.pause();
    backsound.currentTime = 0;
    clearInterval(segundero);
    clock.pause();
    clock.currentTime = 0;
    [opcion1, opcion2, opcion3].forEach(opcion => {
        opcion.innerText = '';
    })
    pregunta.innerText = "¿Quieres volver a intentar para mejorar tu puntaje?"
});

    
