class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Creamos el metodo con event.preventDefault() para evitar el comportamiento 
      // predeterminado de envío de formulario que actualizará la página web.
      // El metodo debe controlar el valor del input tipo texto.
     event.preventDefault()
     this.setState({
        submit: this.state.input
      });
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          { /* creamos el input cuyo value va a corresponder con el state.input del constructor 
          y un manejador de eventos onChange establecido al metodo antes creado*/}
          <input value={this.state.input} onChange={this.handleChange}/>
            <button type='submit'>Submit!</button>
          </form>
          {/* Tambien tendremos que crear un h1 que recoja el valor del input*/}
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  }