//Primer componente React desde cero
class MyComponent extends React.Component {
    constructor(props){ //al añadir props al constructor y al super heredará las propiedades de React.Component
      super(props);
    }
    render(){
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
  
      );
    }
  };
  ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
     
 