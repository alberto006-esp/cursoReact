class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Creamos nuestro primer state y le asignamos un nombre a la propiedad name
      this.state = {
        name: 'Alberto'
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };