export function Tabla(numero, cantidad) {
  const tabla = [];
  for (let i = 1; i <= cantidad; i++) {
    tabla.push({ numero, multiplicador: i, resultado: numero * i });
  }
  return tabla;
}
