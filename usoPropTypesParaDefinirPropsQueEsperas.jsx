const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
 
  <ShoppingCart />
   {/* 
    La parte de PropTypes.number verifica que quantity es una función. 
    Añadir isRequired le dice a React que quantity es una propiedad obligatoria para ese componente. 
    Verás una advertencia si no se proporciona esa propiedad.
*/} 
  Items.propTypes = { 
    quantity:  PropTypes.number.isRequired 
    };
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };