 function Botones() {
      const [botonActivo, setBotonActivo] = React.useState("izquierdo");

      const manejarClick = (boton) => {
        setBotonActivo(boton === "izquierdo" ? "derecho" : "izquierdo");
      };

      return (
        <div>
          <h2>Botones Alternados</h2>
          <button
            onClick={() => manejarClick("izquierdo")}
            disabled={botonActivo !== "izquierdo"}
          >
            Izquierdo
          </button>

          <button
            onClick={() => manejarClick("derecho")}
            disabled={botonActivo !== "derecho"}
          >
            Derecho
          </button>
        </div>
      );
    }

    ReactDOM.render(<Botones />, document.getElementById("root"));