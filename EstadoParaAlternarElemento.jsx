class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Ligamos el metodo al constructor del componente con esta sentencia
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    // creamos el metodo toggleVisibility para que alterne el boton
    toggleVisibility(){
      this.setState(state => {
        if(state.visibility == true)
          return {visibility: false}
        if(state.visibility == false)
          return {visibility: true}
      });
    }
    {/* toggleVisibility() { otra forma de hacerlo
    this.setState(state => ({
        visibility: !state.visibility
      }));
    }*/} 
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }