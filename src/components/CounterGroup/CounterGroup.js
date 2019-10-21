import React from 'react';
import Counter from '../Counter/Counter.js';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupSize: this.props.defaultCounters, 
            groupSizeInput: this.props.defaultCounters,
            sum: 0};
        this.populateCounters = this.populateCounters.bind(this);
        this.counterUpdateCallback = this.counterUpdateCallback.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setCounterSize = this.setCounterSize.bind(this);
    }


    render() {
        let items = this.populateCounters();

        return (
          <div>
            <input type="text" value={this.state.groupSizeInput} onChange={this.handleChange}/>
            <p><button onClick={this.setCounterSize}>
                Regenerate indicated Counters </button></p>
            <p>Sum: {this.state.sum}</p>
            {items}
          </div>
        );
    }

    populateCounters() {
        let items = [];
        for(let i=0; i < this.state.groupSize; i++){
            items.push(<Counter
                        key={i}
                        onCounterValueChange={this.counterUpdateCallback}
                />);
        }
        return items;
    }

    counterUpdateCallback(changeNum) {
        this.setState({sum: this.state.sum + changeNum})
    }

    setCounterSize() {
        this.setState({groupSize: this.state.groupSizeInput})
    }

    handleChange(event) {
        this.setState({groupSizeInput: event.target.value})
    }
}

export default CounterGroup;