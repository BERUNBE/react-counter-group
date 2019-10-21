import React from 'react';
import Counter from '../Counter/Counter.js';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {groupSize: this.props.defaultCounters, groupSizeInput: this.props.defaultCounters};
        this.handleChange = this.handleChange.bind(this);
        this.setCounterSize = this.setCounterSize.bind(this);
    }


    render() {
        var items = [];
        for(let i=0; i < this.state.groupSize; i++){
            items.push(<Counter/>);
        }

        return (
          <div>
            <input type="text" value={this.state.groupSizeInput} onChange={this.handleChange}/>
            <p><button onClick={this.setCounterSize}>
                Regenerate indicated Counters </button></p>
            <p>Sum: 0</p>
            {items}
          </div>
        );
    }

    setCounterSize() {
        this.setState({groupSize: this.state.groupSizeInput})
    }

    handleChange(event) {
        this.setState({groupSizeInput: event.target.value})
    }
}

export default CounterGroup;