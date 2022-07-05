const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Anidamos el componente TypesOfFuit dentro de Fruits */ }
        <TypesOfFruit />
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Anidamos el componente Fruits al componente TypesOfFood de manera que TypesOfFruit sera el componente hijo
               de Fruits y, a su vez, Fruits será hijo de TypesOfFood */ }
          <Fruits />
         
        </div>
      );
    }
  };