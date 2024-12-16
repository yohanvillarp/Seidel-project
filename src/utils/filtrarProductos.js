export const filtrarProductos = (productos, filtros) => {
  // Aplica filtro de marca
  const filtraMarca = filtrarPorMarca(productos, filtros.marca);
  // Aplica filtro de color
  const filtraColor = filtrarPorColor(filtraMarca, filtros.color);
  // Aplica filtro de precio
  const filtraPrecio = filtrarPorPrecio(filtraColor, filtros.precio);
  return filtraPrecio;
}

const filtrarPorMarca = (productos, marca) => {
  if (marca === 'all') {
    return productos;
  }
  return productos.filter((producto) => producto.marca.nombre.toLowerCase() === marca.toLowerCase());
}

const filtrarPorPrecio = (productos, precio) => {
  if (precio === 'all') {
    return productos;
  }
  // Copia el arreglo para evitar mutación
  const productosOrdenados = [...productos];

  if (precio === 'ascendente') {
    return productosOrdenados.sort((a, b) => a.precio - b.precio);
  } else if (precio === 'descendente') {
    return productosOrdenados.sort((a, b) => b.precio - a.precio);
  }

  return productosOrdenados;
}

const filtrarPorColor = (productos, color) => {
  if (color === 'all') {
    return productos;
  }
  return productos.filter((producto) => producto.color === color);
}
