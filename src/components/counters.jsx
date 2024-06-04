import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        return (
            <React.Fragment>
                <button className='btn btn-primary' onClick={this.props.onAdd}>Add Item</button>
                <hr />

                { this.props.counters.map(c => (
                <Counter key={c.id} 
                         counter={c}
                         onDelete={this.props.onDelete} 
                         onIncrement={this.props.onIcrement}
                         onDecrement={this.props.onDecrement}
                />
                )) }
            </React.Fragment>
        );
    }
}
 
export default Counters;
