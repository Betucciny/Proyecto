class lugar {
    constructor(titulo, text, imagenes, alter, figcap, recom, punt) {
        this.titulo = titulo;
        this.text = text;
        this.images = imagenes;
        this.alt = alter;
        this.figcap = figcap;
        this.recom = recom;
        this.punt = punt
    }
    getHTML(){
        const articulo = document.createElement('article');

        const titulo = document.createElement('h3');
        titulo.textContent = this.titulo;
        articulo.appendChild(titulo);

        const texto = document.createElement('p');
        texto.textContent = this.text;
        articulo.appendChild(texto);

        const figura = document.createElement('figure');
        const image = document.createElement('img');
        image.alt = this.alt;
        image.src = this.images;
        figura.appendChild(image);

        const figcap = document.createElement('figcaption');
        figcap.textContent = this.figcap;
        figura.appendChild(figcap);
        articulo.appendChild(figura);

        const textoRecom = document.createElement('h4');
        textoRecom.textContent = 'Nuestra recomendaciones';
        articulo.appendChild(textoRecom);

        const recomen = document.createElement('p');
        recomen.textContent = this.recom;
        articulo.appendChild(recomen);

        const nuestraP = document.createElement('h4')
        nuestraP.textContent = 'Nuestra puntuación';
        articulo.appendChild(nuestraP);

        for(let i=0; i<this.punt; i++){
            const estrella = document.createElement('span')
            estrella.classList.add('fa');
            estrella.classList.add('fa-star');
            articulo.appendChild(estrella);
        }
        return articulo;
    }
}

function cambio(event){
    const direccion = parseInt(event.currentTarget.dataset.index);
    const tipo =  parseInt(event.currentTarget.parentNode.dataset.index);
    let nextIndex = currentIndex[tipo];
    if(direccion===0){
        nextIndex--;
    }else{
        nextIndex++;
    }
    if (nextIndex < 0) {
        nextIndex = lugaresL[tipo].length;
    }
    if (nextIndex === lugaresL[tipo].length) {
        nextIndex = 0;
    }
    const artitulo = lugaresL[tipo][nextIndex];
    const caja = event.currentTarget.parentNode;
    const seleccion = caja.querySelector('article');
    seleccion.innerHTML = artitulo.innerHTML;
    currentIndex[tipo] = nextIndex;
}

let currentIndex = [0, 0, 0];

const arrowL = document.querySelectorAll('.lefta')
const arrowR = document.querySelectorAll('.righta')


const lugarRe = [];
const lugarRE = [];
const lugarEs = [];



for(let i=0; i<numRe; i++) {
    let lugarO = new lugar(tituloRe[i], textoRe[i], imgRe[i], altRe[i], figRe[i], recomRe[i], puntRe[i]);
    lugarRe.push(lugarO.getHTML());
}


for(let i=0; i<numRE; i++){
    let lugarO = new lugar(tituloRE[i],textoRE[i],imgRE[i],altRE[i],figRE[i],recomRE[i],puntRE[i]);
    lugarRE.push(lugarO.getHTML());
}

for(let i=0; i<numEs; i++){
    let lugarO = new lugar(tituloEs[i],textoEs[i],imgEs[i],altEs[i],figEs[i],recomEs[i],puntEs[i]);
    lugarEs.push(lugarO.getHTML());
}

const lugaresL = [
    lugarRe, lugarRE, lugarEs
]


for(let i=0; i<arrowR.length; i++){
    arrowL[i].addEventListener('click',cambio)
    arrowR[i].addEventListener('click',cambio)
    const caja = arrowL[i].parentNode;
    const articulo = lugaresL[i][0];
    const seleccion = caja.querySelector('article');
    seleccion.innerHTML = articulo.innerHTML;
}


