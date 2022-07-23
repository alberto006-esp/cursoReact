class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/*Aqui llamaremos a this.state.name para pasar el valor de
        CamperBot al componente navbar */}
           <Navbar name={this.state.name}/>
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/*//El elemento h1 renderizara el valor pasado desde el state*/}
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
      );
    }
  };