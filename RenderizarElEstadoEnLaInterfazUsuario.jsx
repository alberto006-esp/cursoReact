class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Usamos el this.state.name para ecceder al valor de la propiedad name */ }
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };