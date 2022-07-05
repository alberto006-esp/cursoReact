const CurrentDate = (props) => {
    return (
      <div>
        { /* Mostramos el valor del prop dentro de la etiqueta <p></p>  */ }
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* pasamos una propiedad de date asignada a la fecha actual desde el objeto Date */ }
          <CurrentDate date={Date()}/>
        </div>
      );
    }
  };