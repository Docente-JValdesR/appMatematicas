export function Multiplicar(a, b) {
  return a * b;
}

export function Sumar(a, b) {
  return a + b;
}

export function Restar(a, b) {
  return a - b;
}

export function DividirConResto(a, b) {
  const resto = a % b;
  const cociente = (a - resto) / b;
  return { cociente, resto };
}

//crea una funcion que divida y se pueda configurar la cantidad de decimales
export function DividirExacto(a, b, decimales) {
  const resto = a % b;
  const cociente = (a - resto) / b;
  const resultado = cociente + resto / b;
  return resultado.toFixed(decimales);
}

//crea una funcion que pueda calcular una potencia
export function Potencia(base, exponente) {
  return base ** exponente;
}

export function SimplificarFraccion(numerador, denominador) {
  if (denominador === 0) {
    throw new Error("El denominador no puede ser cero");
  }

  function MCD(a, b) {
    return b === 0 ? a : MCD(b, a % b);
  }

  const mcd = MCD(numerador, denominador);

  const numeradorSimplificado = numerador / mcd;
  const denominadorSimplificado = denominador / mcd;

  return { numeradorSimplificado, denominadorSimplificado };
}
