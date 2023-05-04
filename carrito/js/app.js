const shopContent= document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer= document.getElementById ("modal-container");
const cantidadCarrito= document.getElementById("cantidadCarrito");




let carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];

productos.forEach((product)=> {
    let content= document.createElement("div");
    content.className="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$</p>

    `;
 
    shopContent.append(content);

/*boton compra*/
    let comprar = document.createElement("button")
comprar.innerText="comrpar";
comprar.className="comprar";

content.append(comprar);

comprar.addEventListener("click", () => {

const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id);


if (repeat){
carrito.map((prod)=>{
if(prod.id===product.id){
    prod.cantidad++;
}

});

}else{ 

    carrito.push({
       id: product.id ,
       img: product.img,
       nombre: product.nombre,
       precio: product.precio,
       cantidad: product.cantidad,
    }); 
    console.log(carrito);
    console.log(carrito.length);
    carritoCounter ();
    saveLocal();
}
}); 
});



//set item

const saveLocal= () => { 

localStorage.setItem("carrito", JSON.stringify(carrito));

};


//get item

JSON.parse(localStorage.getItem("carrito"));







