class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* 
              Renderiza una instancia del componente Welcome en el componente padre App 
              y le asignamos una propiedad name. */ }
              <Welcome name="Alberto"/>
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /*  
            Usamos el this.props para acceder al valor de la propiedad name.
            */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
          </div>
      );
    }
  };