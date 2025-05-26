
const obtenerHtml = () : string => {
 const textArea = document.getElementById("textArea");
    if(textArea && textArea instanceof HTMLTextAreaElement){
      return textArea.value;
    } 
     return "";
}


const buscarCoincidencias = () => {
    const regex = /(http|https):\/\/.{1,}(webp|jpg|png|svg)/gm;
    const html = obtenerHtml()
    const coincidencias = html.match(regex)

    return coincidencias;
}


const pintarEnlaces = (): void => {
  const divEnlacesImagenes = document.getElementById("divEnlacesImagenes");

  if (divEnlacesImagenes && divEnlacesImagenes instanceof HTMLDivElement) {
    const resultadosImagenes = buscarCoincidencias();

    if (resultadosImagenes) {
      divEnlacesImagenes.innerHTML = "";
      for (let i = 0; i < resultadosImagenes.length; i++) {
        divEnlacesImagenes.innerHTML += `<img src="${resultadosImagenes[i]}" alt="imagen-${i}" />`;
      };
    };
  };
};


const botonBuscarEnlaces = document.getElementById("button");
    if(botonBuscarEnlaces && botonBuscarEnlaces instanceof HTMLButtonElement){
        botonBuscarEnlaces.addEventListener("click", pintarEnlaces);
    }