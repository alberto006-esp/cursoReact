class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Ligamos el metodo al constructor del componente con esta sentencia
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Declaremos el metodo onclick para que cuando se haga click en el boton, se ejecute el metodo handleClick */ }
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };