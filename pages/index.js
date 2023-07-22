import Head from "next/head";
import Logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="vh-100">
      <Head>
        <title>Multiplica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="display-1 text-center">¡Bienvenido!</h1>
        <div className="row row-cols-2 text-center align-items-center">
          <i
            className="bi bi-plus-square text-primary-emphasis"
            style={{ fontSize: "150px" }}
          ></i>
          <i
            className="bi bi-x-square text-danger-emphasis"
            style={{ fontSize: "150px" }}
          ></i>
          <i
            className="bi bi-dash-square text-success-emphasis"
            style={{ fontSize: "150px" }}
          ></i>
          <Image
            src={Logo}
            alt="Logo de la aplicacion"
            width={160}
            height={160}
          />
        </div>
        <Link href="/menu">
          <div className="d-grid gap-2 col mx-auto">
            <button className="btn btn-primary btn-lg">Comenzar</button>
          </div>
        </Link>
      </main>

      <footer className="fixed-bottom bg-dark">
        <p>creado por José Valdés</p>
      </footer>
    </div>
  );
}
