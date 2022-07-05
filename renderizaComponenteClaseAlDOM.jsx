class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
  
  // Para los componentes de React hay que pasar los componentes con esta sintaxis, como una etiqueta cerrada.
  ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))//