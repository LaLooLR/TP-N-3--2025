function CalculadoraForm({ onCalcular }) {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalcular(num1, num2, operacion);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
        required
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        required
      />
      <select
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>
      <button
        type="submit"
        disabled={operacion === "division"}
      >
        Calcular
      </button>
    </form>
  );
}

function App() {
  const [resultado, setResultado] = React.useState(null);

  const calcular = (num1, num2, operacion) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado("Por favor ingresa números válidos");
      return;
    }

    let res;
    switch (operacion) {
      case "suma":
        res = a + b;
        break;
      case "resta":
        res = a - b;
        break;
      case "multiplicacion":
        res = a * b;
        break;
      case "division":
        res = "Operación no permitida";
        break;
      default:
        res = "Operación inválida";
    }
    setResultado(res);
  };

  return (
    <div>
      <h2>Calculadora React</h2>
      <CalculadoraForm onCalcular={calcular} />
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

// Renderizar en el DOM
ReactDOM.render(<App />, document.getElementById("root"));