class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Creamos una expresion ternaria que si se cumple la condicion muestre si ganas o pierdes */}
      return <h1>{this.props.fiftyFifty ?" You Win!": "You Lose!"}</h1>;
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        // modificamos el return para que actue como un contador
        return {
          counter: this.state.counter + 1
        }
      });
    }
    render() {
      const expression = Math.random()>=.5 ? true : false; // Cambia esta línea
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* renderizamos el componente hijos Results con el fiftyFifty como prop*/}
          <Results fiftyFifty={expression}/>
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }