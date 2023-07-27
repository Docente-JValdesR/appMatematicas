import { useEffect, useState } from "react";
import { Sumar } from "../../function/matFunctions";
export default function Actividad() {
  const [tipodeNumero, setTipodeNumero] = useState("");
  const [cifras, setCifras] = useState(0);
  const [sumandos, setSumandos] = useState([]);
  const [resultado, setResultado] = useState(0);
  const [numerosSeparados, setNumerosSeparados] = useState([]);
  const [resultadoSeparado, setResultadoSeparado] = useState([]);

  const generarSumandosAleatorios = (cantidadCifras, contextoNumerico) => {
    const base = Math.pow(10, cantidadCifras - 1);
    let nuevosSumandos = [];

    switch (contextoNumerico) {
      case "natural":
        nuevosSumandos.push([Math.floor(base * Math.random() * 9) + 1]); // Número natural entre 1 y 9 como fracción
        nuevosSumandos.push([Math.floor(base * Math.random() * 9) + 1]); // Número natural entre 1 y 9 como fracción
        break;

      case "entero":
        nuevosSumandos.push([
          Math.random() < 0.5 ? -1 : 1 * Math.floor(base * Math.random() * 9),
        ]); // Valor absoluto entre 1 y 9 como fracción
        nuevosSumandos.push([
          Math.random() < 0.5 ? -1 : 1 * Math.floor(base * Math.random() * 9),
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
    separarNumerosEnArrays(nuevosSumandos);
    const nuevoResultado = Sumar(
      parseInt(nuevosSumandos[0]),
      parseInt(nuevosSumandos[1])
    );
    setResultado(nuevoResultado);
  };

  function separarNumerosEnArrays(arr) {
    const numerosSeparados = [];

    for (let i = 0; i < arr.length; i++) {
      // Paso 1: Convierte el número en una cadena
      const numeroComoCadena = Math.abs(arr[i]).toString();

      // Paso 2: Obtiene la cantidad de dígitos esperada (dependiendo de la cantidad de cifras)
      const digitosEsperados = cifras > 0 ? cifras : numeroComoCadena.length;

      // Paso 3: Usa el método 'padStart' para llenar con ceros a la izquierda si es necesario
      const numeroRellenado = numeroComoCadena.padStart(digitosEsperados, "0");

      // Paso 4: Divide la cadena rellenada en caracteres individuales usando el método 'split'
      const cifrasComoCadena = numeroRellenado.split("");

      // Paso 5 (opcional): Convierte cada carácter en un número usando el método 'map'
      const cifrasComoNumeros = cifrasComoCadena.map((cifra) =>
        parseInt(cifra)
      );

      // Si el número original es negativo, agrega el signo "-" al primer elemento del array
      if (arr[i] < 0) {
        cifrasComoNumeros[0] = -cifrasComoNumeros[0];
      }

      numerosSeparados.push(cifrasComoNumeros);
    }

    return numerosSeparados;
  }
  function separarNumeroEnArray(numero) {
    const numeroComoCadena = Math.abs(numero).toString();
    const digitosEsperados = cifras > 0 ? cifras : numeroComoCadena.length;
    const numeroRellenado = numeroComoCadena.padStart(digitosEsperados, "0");
    const cifrasComoCadena = numeroRellenado.split("");
    const cifrasComoNumeros = cifrasComoCadena.map((cifra) => parseInt(cifra));
    if (numero < 0) {
      cifrasComoNumeros[0] = -cifrasComoNumeros[0];
    }
    return cifrasComoNumeros;
  }

  useEffect(() => {
    const resultadoSeparacion = separarNumerosEnArrays(sumandos);
    setNumerosSeparados(resultadoSeparacion);
    const separacionDelResultado = separarNumeroEnArray(resultado);
    setResultadoSeparado(separacionDelResultado);
  }, [sumandos]);
  console.log(numerosSeparados);
  console.log(resultadoSeparado);

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
      <button
        className="btn btn-primary"
        onClick={() => generarSumandosAleatorios(cifras, tipodeNumero)}
      >
        Comenzar con la actividad
      </button>
      <div className="row display-4 fw-bold">
        <div className="col-3 text-end align-self-center">
          <i className="bi bi-plus-lg" style={{ fontSize: "50px" }}></i>
        </div>
        <div className="col-9">
          <div className="row text-center">
            {numerosSeparados.length > 0
              ? numerosSeparados[0].map((numero, index) => (
                  <div className="col-2 border rounded m-2" key={index}>
                    {numero}
                  </div>
                ))
              : null}
          </div>
          <div className="row text-center">
            {numerosSeparados.length > 0
              ? numerosSeparados[1].map((numero, index) => (
                  <div className="col-2 border rounded m-2" key={index}>
                    {numero}
                  </div>
                ))
              : null}
          </div>
          <hr />
          <div className="row text-end">
            {resultadoSeparado
              ? resultadoSeparado.map((numero, index) => (
                  <div className="col-2 border rounded m-1" key={index}>
                    {numero}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
