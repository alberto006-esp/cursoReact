class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Definimos componente hijo Camper 
   const Camper = (props) => {
      return <p>{props.name}</p>
    };
  // Definiremos propTypes para que el valor name sea proporcionado como un prop y verifique que sea de tipo string.
    Camper.propTypes = { 
      name:  PropTypes.string.isRequired 
    };
   // Asignamos las props predeterminadas de Camper
     Camper.defaultProps = {
      name: 'CamperBot'
    };