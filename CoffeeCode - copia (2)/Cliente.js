function consultarProductos() {
    console.log("----- MENÚ DE COFFEE CODE -----");
    console.log(listaProductos);

    document.write("<h1>Menú de Coffee Code</h1>");
    document.write(`<p>${listaProductos}</p>`);
}

function crearPedido(producto, precio) {
    console.log(`El cliente pidió: ${producto}`);
    agregarPedido(producto, precio);
}

function listarPedidos() {
    console.log("----- PEDIDOS -----");
    console.log(listaPedidos);

    document.write("<h1>Pedidos</h1>");
    document.write(`<p>${listaPedidos}</p>`);
}
