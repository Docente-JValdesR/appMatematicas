import Link from "next/link";

export default function menu() {
  return (
    <div className="container vh-100 d-flex">
      <div className="row row-cols-2 align-items-center">
        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">adicion con reserva</h2>
        </div>

        <div className="col border rounded menu">
          <Link href="/adicion" className="h3 fw-bold">
            adicion
          </Link>
        </div>

        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">Tablas de multiplicar</h2>
        </div>

        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">Multiplicacion</h2>
        </div>
        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">adicion con reserva</h2>
        </div>

        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">adicion</h2>
        </div>

        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">Tablas de multiplicar</h2>
        </div>

        <div className="col border rounded menu">
          <h2 className="h3 fw-bold">Multiplicacion</h2>
        </div>
      </div>
    </div>
  );
}
