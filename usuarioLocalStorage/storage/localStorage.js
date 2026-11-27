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