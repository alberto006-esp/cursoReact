class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Accedemos a la propiedad name del estate
    const name = this.state.name
      
      return (
        <div>
          { /* Recogemos el valor de la constante para que muestre el valor de la propiedad name */ }
          <h1>{name}</h1>
        </div>
      );
    }
  };