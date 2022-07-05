const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /*Para renderizar el ChildComponent dentro de ParentComponent se añadirá la etiqueta con el nombre del componente hijo*/ }
        <ChildComponent />
  
        </div>
      );
    }
  };