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
                    this.setState({counter: this.state.counter + 1})
                    }>
                    <h1>+</h1>
                </button> 

                {this.state.counter}
                
                <button onClick={() => 
                    this.setState({counter: this.state.counter - 1})
                    }>
                    <h1>-</h1>
                </button> 
            </div>
        );
    }
}

export default Counter;