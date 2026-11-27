import { guardarUsuario } from "../storage/localStorage";

export function registrarUsuario(nombre, edad) {

    if (nombre.trim() === "") {
        return false;
    }

    const edadNumero = Number(edad);

    if (isNaN(edadNumero) || edadNumero < 0) {
        return false;
    }

    guardarUsuario({ nombre, edad: edadNumero });

    return true;
}
