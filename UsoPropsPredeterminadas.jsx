const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // usamos el defaultProps para establecer props predeterminadas y asignarselas al componente en este caso ShoppingCart
  ShoppingCart.defaultProps = { items: 0}