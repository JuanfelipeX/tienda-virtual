alert("hello world")

function agregarProducto(id){
    var  product = document.getElementById(id);
    var productName = product.children[0].textContent; 
    var price = product.children[1].textContent; 
    //console.log("Id: " + id  + " Product name: " + productName + " Price: " + price );

    var item = document.createElement('li')
    item.innerText = productName;
    document.getElementById('listaProductos').appendChild(item);
}