// Component properties are immutable
// Functional component cannot have state
// Why super in constructor
// Using babel to transpile code in javascript, writing state outside constructor
// Babel -- compile jsx into js
// React build in setState method which is available on every class component
// State of a component can be accessed by that component only

const Result = (props) => {
  return (
      <div>{props.counter}</div>
      );
     };

class App extends React.Component {
  state = {
    counter: 0
  };
  
  incrementalCounter = (incrementalValue) => {
  this.setState((prevState) => ({
  	counter : prevState.counter + incrementalValue
  }));
  }
  
  render () {
  	return (
  	<div>
  	  <Button incrementValue={1} value={this.state.counter} onClickFunction={this.incrementalCounter}/>
      <Button incrementValue={2} value={this.state.counter} onClickFunction={this.incrementalCounter}/>
      <Button incrementValue={3} value={this.state.counter} onClickFunction={this.incrementalCounter}/>
      <Result counter={this.state.counter}/>
  	</div>
  	);
	}
}
class Button extends React.Component {
  // constructor(props) {
  // super(props);
  // this.state = {
  // counter : 0
  // };
  // }

//   handleClick = () => {
//     // this --> refers to the component instance
//     // this.state.counter++ ; update component state with the incremented value
//     // SetState is async

//     // this.setState({
//     //  counter: this.state.counter + 1
//     // });

//     //   this.setState((prevState) => {
//     // 		return {
//     //      		counter : prevState.counter + 1
//     //     };
//     // });

//     this.setState((prevState) => ({
//       counter: prevState.counter + this.props.incrementValue
//     }));
//   };
	handleClick = () => {
  		this.props.onClickFunction(this.props.incrementValue);
  };
   
  render() {
    return (
    		<button onClick={this.handleClick}> {this.props.incrementValue} </button>
     );
    }
   }
   

// ReactDOM.render( <Button /> , mountNode);
ReactDOM.render( <App /> , mountNode);
