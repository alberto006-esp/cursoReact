const styles={
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  };
  // En react podemos asignar un object de estilos a una constante y asignarle propiedades
  class Colorful extends React.Component {
    render() {
      // posteriormente podemos utilizar la constante para aplicar los estilos
      return (
        <div style={styles}>Style Me!</div>
      );

    }
  };