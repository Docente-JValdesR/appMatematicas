import React, { useState } from "react";

export default function Actividad() {
  const [tipodeNumero, setTipodeNumero] = useState("");
  const [cifras, setCifras] = useState(0);
  const [sumandos, setSumandos] = useState([]);
  const [resultado, setResultado] = useState(null);

  // Función para obtener el máximo común divisor (MCD) entre dos números
  const mcd = (a, b) => {
    return b === 0 ? a : mcd(b, a % b);
  };

  // Función para simplificar una fracción
  const simplificarFraccion = (numerador, denominador) => {
    const divisorComun = mcd(numerador, denominador);
    return [numerador / divisorComun, denominador / divisorComun];
  };

  // Función para generar dos números aleatorios en un contexto numérico específico
  const generarSumandosAleatorios = (cantidadCifras, contextoNumerico) => {
    const base = Math.pow(10, cantidadCifras - 1);
    let nuevosSumandos = [];

    switch (contextoNumerico) {
      case "natural":
        nuevosSumandos.push([Math.floor(base * Math.random() * 9) + 1, 1]); // Número natural entre 1 y 9 como fracción
        nuevosSumandos.push([Math.floor(base * Math.random() * 9) + 1, 1]); // Número natural entre 1 y 9 como fracción
        break;

      case "entero":
        nuevosSumandos.push([
          (Math.random() < 0.5 ? -1 : 1) * Math.floor(base * Math.random() * 9),
          1,
        ]); // Valor absoluto entre 1 y 9 como fracción
        nuevosSumandos.push([
          (Math.random() < 0.5 ? -1 : 1) * Math.floor(base * Math.random() * 9),
          1,
        ]); // Valor absoluto entre 1 y 9 como fracción
        break;

      case "racional":
        const numerador1 =
          (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 9) + 1;
        const denominador1 = Math.floor(Math.random() * 9) + 1;
        nuevosSumandos.push([numerador1, denominador1]); // Primer número racional como fracción

        const numerador2 =
          (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 9) + 1;
        const denominador2 = Math.floor(Math.random() * 9) + 1;
        nuevosSumandos.push([numerador2, denominador2]); // Segundo número racional como fracción
        break;

      default:
        return "Error: El contexto numérico no es válido.";
    }
    setSumandos(nuevosSumandos);
    setResultado(null); // Reseteamos el resultado al generar nuevos sumandos.
  };

  // Función para formatear un número en formato vertical
  const formatearNumeroVertical = (numero) => {
    if (numero < 0) {
      // Si es negativo, tomamos el valor absoluto y agregamos el signo "-" al resultado
      numero = Math.abs(numero);
      return ["-" + numero.toString().split("").reverse().join("")];
    } else {
      return [numero.toString().split("").reverse().join("")];
    }
  };

  // Función para mostrar el resultado de la suma
  const mostrarResultado = () => {
    const resultadoSuma = sumandos.reduce(
      (acumulador, sumando) => acumulador + sumando[0],
      0
    );
    setResultado(resultadoSuma);
  };

  return (
    <div className="container vh-100">
      <div className="row">
        <h1>Selecciona el conjunto numerico</h1>
        <button
          onClick={() => setTipodeNumero("natural")}
          className="col-3 border rounded m-1 btn"
        >
          Naturales
        </button>
        <button
          onClick={() => setTipodeNumero("entero")}
          className="col-3 border rounded m-1 btn"
        >
          Enteros
        </button>
        <button
          onClick={() => setTipodeNumero("racional")}
          className="col-3 border rounded m-1 btn"
        >
          Racionales
        </button>
      </div>
      {tipodeNumero === "racional" ? null : (
        <div className="row">
          <h1>Selecciona la cantidad de cifras</h1>
          <button
            onClick={() => setCifras(1)}
            className="col-2 border rounded m-1 btn"
          >
            1 cifra
          </button>
          <button
            onClick={() => setCifras(2)}
            className="col-2 border rounded m-1 btn"
          >
            2 cifras
          </button>
          <button
            onClick={() => setCifras(3)}
            className="col-2 border rounded m-1 btn"
          >
            3 cifras
          </button>
          <button
            onClick={() => setCifras(4)}
            className="col-2 border rounded m-1 btn"
          >
            4 cifras
          </button>
        </div>
      )}

      <div className="row">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => generarSumandosAleatorios(cifras, tipodeNumero)}
        >
          Comenzar la Actividad
        </button>
      </div>

      <div className="row">
        {sumandos.map((sumando, index) => (
          <p key={index}>
            Sumando {index + 1}: {formatearNumeroVertical(sumando[0])}
          </p>
        ))}
      </div>

      {resultado !== null && (
        <div className="row">
          <p>Resultado: {formatearNumeroVertical(resultado)}</p>
        </div>
      )}

      {sumandos.length > 0 && resultado === null && (
        <div className="row">
          <button className="btn btn-success btn-lg" onClick={mostrarResultado}>
            Mostrar Resultado
          </button>
        </div>
      )}
    </div>
  );
}
