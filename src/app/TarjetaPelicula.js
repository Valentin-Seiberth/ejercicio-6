import React, { useState, useEffect } from "react";

export default function TarjetaPelicula({ pelicula }) {
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    const guardada = localStorage.getItem(pelicula.imdbID);
    if (guardada) setPuntuacion(parseInt(guardada));
  }, []);

  const actualizar = (valor) => {
    setPuntuacion(valor);
    localStorage.setItem(pelicula.imdbID, valor);
  };

  return React.createElement(
    "div",
    { style: { marginTop: "20px", border: "1px solid gray", padding: "10px" } },
    React.createElement("h2", null, pelicula.Title),
    React.createElement("img", { src: pelicula.Poster, alt: pelicula.Title, width: 150 }),
    React.createElement("p", null, pelicula.Year),
    React.createElement(
      "div",
      null,
      [1, 2, 3, 4, 5].map((i) =>
        React.createElement(
          "span",
          {
            key: i,
            style: {
              cursor: "pointer",
              color: i <= puntuacion ? "gold" : "gray",
              fontSize: "20px",
            },
            onClick: () => actualizar(i),
          },
          "★"
        )
      )
    )
  );
}
