import "./Main.css"
import { Card } from "../Card/Card"
//Variable numero de paginas
let pageNum = 1;

//Template HTML
const template = () => {
    return `
    <h2>Gallery</h2>
    <ul id="gallery-container"></ul>
    <button id="nextBtn">Next</button>
    `
}


//Funcion para recuperar los datos con el argumento num para las paginas. 
const getData = async(num) => {
    //Recuperamos la lista de personajes.
    const ul = document.querySelector("#gallery-container");
    //Hacemos la peticion
    const data = await fetch(`
        https://rickandmortyapi.com/api/character?page=${num}&limit=30`
        )
    const dataJSON = await data.json()
    //Pintamos los datos en pantalla.
    for (const character of dataJSON.results) {
const li = document.createElement("li");
    li.innerHTML = Card(character)
     ul.appendChild(li)   
    }
}
//Añado los eventos.
const listeners = () => {
    const nextBtn = document.querySelector("#nextBtn")
    nextBtn.addEventListener("click", () => {
        pageNum++;
        getData(pageNum)
    })
}


export const printTemplate = () => {
    //Primero añado el html.
    document.querySelector("main").innerHTML = template()
    //Segundo recupero los datos.
    getData(pageNum)
   //Tercero añado los listeners en este punto porque ya en el punto uno tendre pintado en el documento los elementos.
    listeners()
}
