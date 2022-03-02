alert("hello world")

function agregarProducto(id){
    var  product = document.getElementById(id);
    var productName = product.children[0].textContent; 
    var price = parseInt(product.children[1].textContent); 
    var total = document.getElementById("total").innerText.split(" ");
    var suma = price + parseInt(total[2]);
    alert(suma);
    //console.log("Id: " + id  + " Product name: " + productName + " Price: " + price );
    var ptotal = document.getElementById('total').textContent.replace(total, suma);
    var cadena = ptotal.replace(total[2], suma);
    document.getElementById('total').textContent = cadena;
    alert(cadena)

    var item = document.createElement('li')
    item.innerText = productName;
    document.getElementById('listaProductos').appendChild(item);
}