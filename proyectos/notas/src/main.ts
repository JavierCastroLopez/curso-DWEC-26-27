import { getElement } from "./components/dom";


//const title = getElement("#h1", HTMLHeadingElement) -> El elemento NO existe, hay que crearlo

const h1Product = document.createElement("h1")
h1Product.classList.add("h1Product")
h1Product.textContent = "Productos";

const divProducts = getElement<"#products", HTMLDivElement>
divProducts.append(h1Product)


//un li con todos los productos que tengo
//
