// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

export default class App extends React.Component {


	  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
     <div >
        <h3>Hello React</h3>
        <div><p>How do I know this is being rendered from React?
        Check the <code>src/components/App.jsx</code> file
        for this content. You can see the dynamic updating
        	with this time rendering: <span>
        {this.state.date.toLocaleTimeString()}</span>.</p>
        </div>
        <div>
        <p>You may also have noticed that the styling has changed. This is due to the 
        addition of bootstrap. The bootstrap css is called specifically from
        the index.html page, but js is injected dynamically.</p>
        <Button bsStyle="success" bsSize="small" >This is a do nothing react-bootstrap Button</Button>
        </div>
      </div>);
  }
}