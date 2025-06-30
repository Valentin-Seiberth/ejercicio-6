import React, { useState } from "react";
import TarjetaPelicula from "./app/TarjetaPelicula";
import "./app/estilos.css";
const CLAVE_API_OMDB = "50361992";

export default function App() {
  const [termino, setTermino] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const buscar = async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${CLAVE_API_OMDB}&s=${termino}`);
    const datos = await res.json();
    setPeliculas(datos.Search ?? []);
  };

  return React.createElement(
    "div",
    { style: { padding: "20px", fontFamily: "sans-serif" } },
    React.createElement("h1", null, "Buscador de Películas"),
    React.createElement("input", {
      placeholder: "Ingresá un título...",
      value: termino,
      onChange: (e) => setTermino(e.target.value),
    }),
    React.createElement("button", { onClick: buscar }, "Buscar"),
    React.createElement(
      "div",
      null,
      peliculas.map((peli) =>
        React.createElement(TarjetaPelicula, { key: peli.imdbID, pelicula: peli })
      )
    )
  );
}