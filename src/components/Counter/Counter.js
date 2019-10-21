import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return(
            <div className="Counter">
                <button onClick={() => 
                        this.incrementCounter()
                    }>
                    <h1>+</h1>
                </button> 

                {this.state.counter}
                
                <button onClick={() => 
                        this.decrementCounter()
                    }>
                    <h1>-</h1>
                </button> 
            </div>
        );
    }

    incrementCounter() {
        this.setState({counter: this.state.counter + 1});
        this.props.onCounterValueChange(1);
    }

    decrementCounter() {
        this.setState({counter: this.state.counter - 1});
        this.props.onCounterValueChange(-1);
    }
}

export default Counter;