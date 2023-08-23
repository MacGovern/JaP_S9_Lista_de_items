const inputItem = document.getElementById("item");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedorLista = document.getElementById("contenedor");

const arreglo = [];

function addList(array) {
    contenedorLista.innerHTML = "";
    array.forEach((element) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        contenedorLista.appendChild(li);
    });
}

btnAgregar.addEventListener('click', () => {
    const nuevoItem = inputItem.value;
    if (nuevoItem !== "") {
        arreglo.push(nuevoItem);
        const arregloString = JSON.stringify(arreglo);
        localStorage.setItem('listado', arregloString);
        addList(arreglo);
        inputItem.value = '';
    }
});

btnLimpiar.addEventListener("click", () => {
    contenedorLista.innerHTML = "";
    localStorage.removeItem('listado');
});

document.addEventListener('DOMContentLoaded', () => {
    addList(JSON.parse(localStorage.getItem('listado')));
});