const noticias = [];
const contenedor = document.querySelector('.left')

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


function Obtener() {
    fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=14fe8db8e8b7402988b72a4c313f87d3')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            for(let i=0; i<3; i++){
                let articulo = json.articles[i]
                noticias.push(new noticia(articulo.title,articulo.description,articulo.url,articulo.urlToImage,'Link',articulo.content))
                contenedor.appendChild(noticias[i].getHTML());
            }
        });
}

Obtener();