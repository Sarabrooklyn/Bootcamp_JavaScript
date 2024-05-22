interface GrupoMusical {
    Nombre: string;
    Añofundacion: number;
    Activo: boolean;
    Genero: string;
}

const grupo_musical1 : GrupoMusical = {
    Nombre: "The Beatles",
    Añofundacion: 1960,
    Activo: true,
    Genero: "🎵 Pop Rock",
};

const grupo_musical2 : GrupoMusical = {
    Nombre: "Queen",
    Añofundacion: 1970,
    Activo: false,
    Genero: "🎸 Rock",
};

const grupo_musical3 : GrupoMusical = {
    Nombre: "AC DC",
    Añofundacion: 1973,
    Activo: true,
    Genero: "🤘 Hard Rock",
};

const grupo_musical4 : GrupoMusical = {
    Nombre: "Ludwig van Beethoven",
    Añofundacion: 1770,
    Activo: false,
    Genero: "🎼 Clásica",
};

const grupo_musical5 : GrupoMusical = {
    Nombre: "The Rolling Stones",
    Añofundacion: 1962,
    Activo: true,
    Genero: "🎸 Rock",
};

const estiloTitulo = "font-weight: bold; background-color: green; font-size:16px";

console.log(grupo_musical1, grupo_musical2, grupo_musical3, grupo_musical4, grupo_musical5);

console.log(`%c${grupo_musical1.Nombre}`, estiloTitulo);
console.log(`%c${grupo_musical2.Nombre}`, estiloTitulo);
console.log(`%c${grupo_musical3.Nombre}`, estiloTitulo);
console.log(`%c${grupo_musical4.Nombre}`, estiloTitulo);
console.log(`%c${grupo_musical5.Nombre}`, estiloTitulo);