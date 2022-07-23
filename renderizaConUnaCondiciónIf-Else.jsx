class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState((state) => ({
        display: !state.display
      }));
    }
    render() {
      // Creamos una condición a traves del state.display del constructor en función de si es true or false.
      if(this.state.display){
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
      }else{
        return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
      }
    }
  };