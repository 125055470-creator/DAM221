function mostrarMenuDinamico() {
    const menu = document.getElementById("menuCliente");

    const tarjetasMenu = productosCliente.map(producto => {
        return `
            <div>
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button onclick="seleccionarProducto('${producto.nombre}')">
                    Agregar
                </button>
                <hr>
            </div>
        `;
    });

    menu.innerHTML = tarjetasMenu.join("");
}

function mostrarPromociones() {
    const promociones = document.getElementById("promociones");

    promociones.innerHTML = "";

    productosCliente.forEach(producto => {
        if (producto.precio >= 50) {
            const descuento = producto.precio * 0.10;
            const precioFinal = producto.precio - descuento;

            promociones.innerHTML += `
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>Precio normal: $${producto.precio.toFixed(2)}</p>
                    <p>10% de descuento</p>
                    <p>Precio final: $${precioFinal.toFixed(2)}</p>
                    <hr>
                </div>
            `;
        }
    });
}

function mostrarProductosDisponibles() {
    const disponibles = document.getElementById("productosDisponibles");

    disponibles.innerHTML = "";

    productosCliente.forEach(producto => {
        disponibles.innerHTML += `
            <p>
                ID: ${producto.id} -
                ${producto.nombre} -
                $${producto.precio.toFixed(2)}
            </p>
        `;
    });
}

mostrarMenuDinamico();
mostrarPromociones();
mostrarProductosDisponibles();