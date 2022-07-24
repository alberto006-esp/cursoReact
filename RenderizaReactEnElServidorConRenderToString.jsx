class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // Usamos el metodo renderToString proporcionado por ReactDOMServer para renderizar App a una cadena.
  ReactDOMServer.renderToString(<App />);