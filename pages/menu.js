import React from "react";

export default function menu() {
  return (
    <div className=" container vh-100">
      <div className="row row-cols-2">
        <div className="col border rounded p-1 m-1">
          <h2 className="h3 fw-bold">adicion con reserva</h2>
        </div>

        <div className="col border rounded p-1 m-1">
          <h2 className="h3 fw-bold">adicion</h2>
        </div>

        <div className="col border rounded p-1 m-1">
          <h2 className="h3 fw-bold">Tablas de multiplicar</h2>
        </div>

        <div className="col border rounded p-1 m-1">
          <h2 className="h3 fw-bold">Multiplicacion</h2>
        </div>
      </div>
    </div>
  );
}
