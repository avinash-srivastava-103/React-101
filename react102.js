// how to decide the component structure
// Approch can be botton up or top down
// Functional components vs Class component
// Passing CSS from JS itself style={{}}
// Spread operator
// Every react event function recieves an event function, this is a wrapper around js event obj
// react components have one way flow of data
// Components can't change the state of it's parents

/*
Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    in input (created by Form)
    in form (created by Form)
    in Form (created by App)
    in div (created by App)
    in App
    */

const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img width="75" src={props.avatar_url} />
      <div className="info" style={{ display: 'inline-block', color: 'black', marginLeft: 10}}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.login}</div>
      </div>
    </div>
  )
};


class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = (event) => {
  		event.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
      		this.props.onSubmit(resp.data);
      })
      .catch(err => {
      		console.log('Call failed');
      });
  };
	render() {
			return (
      			<form onSubmit={this.handleSubmit}>
            	<input type="text" 
              value={this.state.userName}
              onChange={(event) => this.setState({userName: event.target.value})}
              placeholder="Github Username" required/>
              <button type="submit">Add card</button>
            </form>
      );
	}
}

class App extends React.Component {
state = {
 	cards: []};
  
  addNewCard = (cardInfo) => {
  		this.setState(prevState => ({
      			cards:prevState.cards.concat(cardInfo)
      }))
  };
render() {
	return (
  		<div>
      	<Form onSubmit={this.addNewCard} />
        <Cardlist cards={this.state.cards} />
      </div>
  );
	}
}

const Cardlist = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
}

ReactDOM.render(<App />, mountNode);
  
