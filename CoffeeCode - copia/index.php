<?php
session_start();

// Inicializar la lista en memoria (Sesión) si no existe
if (!isset($_SESSION['productos'])) {
    $_SESSION['productos'] = [];
}

// 1. AGREGAR PRODUCTO
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['accion']) && $_POST['accion'] === 'agregar') {
    $nuevo = [
        'id' => (int)$_POST['id'],
        'nombre' => $_POST['nombre'],
        'cantidad' => (int)$_POST['cantidad'],
        'precio' => (float)$_POST['precio']
    ];
    $_SESSION['productos'][] = $nuevo;
    header('Location: index.php');
    exit;
}

// 2. EDITAR PRODUCTO
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['accion']) && $_POST['accion'] === 'editar') {
    $id = (int)$_POST['id'];
    foreach ($_SESSION['productos'] as &$p) {
        if ($p['id'] === $id) {
            $p['nombre'] = $_POST['nombre'];
            $p['cantidad'] = (int)$_POST['cantidad'];
            $p['precio'] = (float)$_POST['precio'];
            break;
        }
    }
    header('Location: index.php');
    exit;
}

// 3. ELIMINAR PRODUCTO
if (isset($_GET['eliminar'])) {
    $idEliminar = (int)$_GET['eliminar'];
    $_SESSION['productos'] = array_filter($_SESSION['productos'], function($p) use ($idEliminar) {
        return $p['id'] !== $idEliminar;
    });
    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gestión de Cocina</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 30px; background-color: #f4f4f9; }
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; }
        form { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
        input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        button { padding: 8px 15px; cursor: pointer; border: none; border-radius: 4px; color: white; }
        .btn-add { background-color: #28a745; }
        .btn-edit { background-color: #ffc107; color: black; }
        .btn-del { background-color: #dc3545; text-decoration: none; padding: 5px 10px; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background-color: #333; color: white; }
    </style>
</head>
<body>

<div class="container">
    <h1>Gestión de Cocina</h1>

    <!-- Formulario para Agregar y Editar -->
    <form method="POST" action="index.php">
        <input type="number" name="id" placeholder="ID del producto" required>
        <input type="text" name="nombre" placeholder="Nombre" required>
        <input type="number" name="cantidad" placeholder="Cantidad" required>
        <input type="number" step="0.01" name="precio" placeholder="Precio" required>
        
        <button type="submit" name="accion" value="agregar" class="btn-add">Agregar</button>
        <button type="submit" name="accion" value="editar" class="btn-edit">Editar por ID</button>
    </form>

    <!-- Tabla de Productos -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            <?php if (!empty($_SESSION['productos'])): ?>
                <?php foreach ($_SESSION['productos'] as $producto): ?>
                    <tr>
                        <td><?= $producto['id'] ?></td>
                        <td><?= $producto['nombre'] ?></td>
                        <td><?= $producto['cantidad'] ?></td>
                        <td>$<?= number_format($producto['precio'], 2) ?></td>
                        <td>
                            <a href="index.php?eliminar=<?= $producto['id'] ?>" class="btn-del" style="color:white;">Eliminar</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php else: ?>
                <tr>
                    <td colspan="5" style="text-align: center;">No hay productos registrados en la cocina.</td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>

</body>
</html>