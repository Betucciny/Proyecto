class comida {
    constructor(titulo, text, linkubi, horario, ref) {
        this.titulo = titulo;
        this.text = text;
        this.linkubi = linkubi;
        this.horario = horario;
        this.ref = ref;
    }
    tarjeta(){
        const section = document.createElement('section');

        const titulo = document.createElement('h2');
        titulo.textContent = this.titulo;
        section.appendChild(titulo);

        const image = document.createElement('img');
        image.src = 'images-comida/' + this.ref + '_logo.jpg';
        section.appendChild(image);

        const info = document.createElement('h3')
        info.textContent = 'Informacion'
        section.appendChild(info)

        const texto = document.createElement('p');
        texto.textContent = this.text;
        section.appendChild(texto);

        const datos = document.createElement('h3');
        info.textContent = 'Datos';
        section.appendChild(datos);

        const texto2 = document.createElement('p');
        const link = document.createElement('a');
        link.href = this.linkubi;
        link.textContent = 'Ubicacion';
        texto2.innerHTML = link.outerHTML + '<br>Horario:<br>' + this.horario;
        section.appendChild(texto2);

        const div = document.createElement('div');
        div.classList.add('imagenesC')

        const sufijos = ['_logo.jpg', '_local.jpg', '_menu.jpg'];
        const titulos = ['Logo', 'Local', 'Menú'];


        for(let i=0; i<sufijos.length; i++){
            const figura =  document.createElement('figure');

            const imagen = document.createElement('img');
            imagen.src = 'images-comida/' + this.ref + sufijos[i];
            figura.appendChild(imagen)

            const figc = document.createElement('figcaption');
            figc.textContent = titulos[i];
            figura.appendChild(figc);

            div.appendChild(figura)
        }

        const button = document.createElement('button');
        section.appendChild(div);

        button.textContent = 'Regresar';
        button.classList.add('button')
        section.appendChild(button)


        return section;
    }
    miniatura(){
        const div = document.createElement('div');
        div.dataset.index = this.ref;

        const nombre = document.createElement('p')
        nombre.textContent = this.titulo;
        div.appendChild(nombre);

        const img = document.createElement('img');
        img.src = 'images-comida/' + this.ref + '_logo.jpg';
        div.appendChild(img);

        return div;
    }
}

function regresar(){
    const caja = document.querySelector('#contenedor-tiendas')
    caja.classList.remove('oculto')
    const seccion = document.getElementById('tarjeta');
    seccion.classList.add('oculto');
    seccion.removeEventListener('click', regresar)
}


function verTarjeta(event){
    const caja = document.querySelector('#contenedor-tiendas')
    caja.classList.add('oculto')
    const ref = event.currentTarget.dataset.index;
    const seccion = document.getElementById('tarjeta');
    seccion.innerHTML = restaurantes[ref].tarjeta().innerHTML
    seccion.classList.remove('oculto');
    seccion.addEventListener('click', regresar)
}


const restaurantes = {}

for(let i=0; i<numeroComida; i++){
    restaurantes[refC[i]] = new comida(tituloC[i], textoC[i], linkUbiC[i], horarioC[i], refC[i]);
}

const caja = document.querySelector('#contenedor-tiendas');

for(let i in restaurantes){
    const x = restaurantes[i].miniatura();
    caja.appendChild(x)
    x.addEventListener('click',verTarjeta)

}