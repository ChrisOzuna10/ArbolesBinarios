import Phone from "../models/Phones.js";
import { bst } from "./dependencies.js";

let addBtn = document.getElementById("guardarBtn");
let buscarBtn = document.getElementById("buscarBtn");
let buscarMin = document.getElementById("buscar_minBtn");
let buscarMax = document.getElementById("buscar_maxBtn");
let imprimir = document.getElementById("imprimirBtn");


let info = document.getElementById("data");

addBtn.addEventListener("click", () => {
    let marcaTxt = document.getElementById("marcaTxt").value;
    let modeloTxt = document.getElementById("modeloTxt").value;
    let colorTxt = document.getElementById("colorTxt").value;

    let celular = new Phone(marcaTxt, modeloTxt, colorTxt);
    let confirm = bst.add(celular);

    if (confirm) {
        Swal.fire({
            title: "Éxito",
            text: "Celular agregado",
            icon: "success"
        });
    }
});

buscarBtn.addEventListener("click", () => {
    let buscarTxt = document.getElementById("searchTxt").value;

    let confirm = bst.iniciarBusqueda(buscarTxt);

    if (confirm) {
        Swal.fire({
            title: "Celular encontrado",
            text: `Modelo: ${confirm.model} Marca: ${confirm.brand} color: ${confirm.color}`,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Celular NO encontrado",
            text: "No se encontró el celular",
            icon: "error"
        });
    }
});

buscarMin.addEventListener("click", () => {
    let confirm = bst.encontrarMinimo();

    if (confirm) {
        Swal.fire({
            title: "Celular encontrado",
            text: `Modelo: ${confirm.model} Marca: ${confirm.brand} color: ${confirm.color}`,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Celular NO encontrado",
            text: "No se encontró el celular",
            icon: "error"
        });
    }
});

buscarMax.addEventListener("click", () => {
    let confirm = bst.encontrarMaximo();

    if (confirm) {
        Swal.fire({
            title: "Celular encontrado",
            text: `Modelo: ${confirm.model} Marca: ${confirm.brand} color: ${confirm.color}`,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Celular NO encontrado",
            text: "No se encontró el celular",
            icon: "error"
        });
    }
});

imprimir.addEventListener("click", () => {
    info.innerHTML = "";
    bst.iniciarRecorrido(celular => {
        let data = document.createElement('li');
        data.textContent = `Modelo: ${celular.model} Marca: ${celular.brand} color: ${celular.color}`;
        info.appendChild(data);
    });
});
