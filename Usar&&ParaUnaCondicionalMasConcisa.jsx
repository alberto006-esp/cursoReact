class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
     
     
      return (
         // Otra forma de poner condiciones sin if/else. usamos el operador && para que la condicion sea mas concisa.
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
            {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };