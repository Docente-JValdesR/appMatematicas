import Link from "next/link";

export default function index() {
  return (
    <div className="container">
      <div className="row vh-100 text-center align-content-center">
        <h1>
          ¡Hola, amiguitos! Hoy vamos a descubrir cómo podemos sumar objetos y
          contar cuántos tenemos en total. ¿Están listos para divertirnos con
          las matemáticas?
        </h1>
        <div className="d-grid gap-2 col mx-auto">
          <Link href="ejemplo">
            <button className="btn btn-primary btn-lg">
              Ir a la explicación
            </button>
          </Link>
          <Link href="adicion/actividad">
            <button className="btn btn-primary btn-lg">
              Comenzar con la actividad
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
