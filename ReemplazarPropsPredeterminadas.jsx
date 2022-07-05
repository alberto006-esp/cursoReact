const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Al cambiar el valor en quantity no importa que tuviera ya una "quantity" 
    predeterminada se puede modificar al asignarle un nuevo valor*/ }
      return <Items quantity = {10}/>
    }
  };