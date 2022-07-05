const List = (props) => {
    { /* Al añadir join unira la lista en una cadena de texto separada por comas.  */ }
    return <p>{props.tasks.join(', ')}</p>
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Asignamos los valores de la lista.*/ }
          <List tasks={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["walk dog", "workout", "study english"]}/>
        </div>
      );
    }
  };