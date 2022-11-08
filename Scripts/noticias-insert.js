const numXcont = 2;

class noticia {
    constructor(titulo, text, link, imagenes, alter, figcap) {
        this.titulo = titulo;
        this.text = text;
        this.link = link;
        this.images = imagenes;
        this.alt = alter;
        this.figcap = figcap;
    }
    getHTML(){
        const articulo = document.createElement('article');

        const titulo = document.createElement('h3');
        titulo.textContent = this.titulo;
        articulo.appendChild(titulo);

        const contenedor = document.createElement('div');

        const texto = document.createElement('p');
        texto.textContent = this.text;
        contenedor.appendChild(texto);

        const figura = document.createElement('figure');
        const link = document.createElement('a');
        link.href = this.link;
        const image = document.createElement('img');
        image.alt = this.alt;
        image.src = this.images;
        link.appendChild(image);
        figura.appendChild(link);

        const figcap = document.createElement('figcaption')
        figcap.textContent = this.figcap;
        figura.appendChild(figcap);

        contenedor.appendChild(figura);
        articulo.appendChild(contenedor);
        return articulo;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const contenedor = document.querySelector('.left')
const noticias = []


for(let i=0; i<numero; i++){
    noticias.push(new noticia(titulos[i],text[i],link[i],imagenes[i],alter[i],figcap[i]))
}

shuffleArray(noticias)

for(let i=0; i<numXcont; i++){
    contenedor.appendChild(noticias[i].getHTML());
}