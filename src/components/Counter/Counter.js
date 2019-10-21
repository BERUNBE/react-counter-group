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
                <button class="ButtonCounter" onClick={() => 
                        this.incrementCounter()
                    }>
                    +
                </button> 

                &nbsp;&nbsp;&nbsp;{this.state.counter}&nbsp;&nbsp;&nbsp;
                
                <button class="ButtonCounter" onClick={() => 
                        this.decrementCounter()
                    }>
                    -
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