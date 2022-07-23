class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* esto mostrara a los 2.5 segundos los usuarios activos  */}
          <h1>Active Users: {this.state.activeUsers}</h1>

        </div>
      );
    }
  }