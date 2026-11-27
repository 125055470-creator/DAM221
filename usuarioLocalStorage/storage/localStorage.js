export function guardarUsuario(usuario){
    const datos = localStorage.getItem("usuarios");
    const usuarios = JSON.parse(datos) || [];
    usuarios.push(usuario);
    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}


export function obtenerUsuarios() {
    const datos = localStorage.getItem("usuarios");
    const usuarios = JSON.parse(datos) || [];
    return usuarios;
}


export function eliminarUsuarios() {
    localStorage.removeItem("usuarios");
}

export function actualizar(nombreAnterior, usuarioNuevo) {
    const datos = localStorage.getItem("usuarios");
    const usuarios = JSON.parse(datos) || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreAnterior) {
            usuarios[i] = usuarioNuevo;
            break;
        }
    }

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );
}