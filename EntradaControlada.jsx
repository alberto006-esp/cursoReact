class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      //  Ligamos el metodo al constructor del componente
    this.handleChange = this.handleChange.bind(this);
    }
    // Creamos el evento con un parametro evento para que reciba la cadena que debe mostrar
    handleChange(event){
      this.setState({
        input: event.target.value
      })
    }
    render() {
      return (
        <div>
          { /* creamos el input cuyo value va a corresponder con el state.input del constructor 
          y un manejador de eventos onChange establecido al metodo antes creado*/}
        <input value={this.state.input} onChange={this.handleChange}/>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };