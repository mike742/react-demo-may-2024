import React, { Component } from 'react';


class Counter extends Component {
    // state = {  
    //     count: this.props.counter.value
    // } 
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    render() { 
        // console.log('props', this.props);
        return (
            <React.Fragment>
                
                <button 
                    type="button" 
                    className="btn btn-primary m-2"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                > + </button>
                <button 
                    type="button" 
                    className="btn btn-primary m-2"
                    onClick={() => this.props.onDecrement(this.props.counter)}
                > - </button>
                <span className='m-2'>{this.formatCount()}</span>
                <button 
                    type="button" 
                    className="btn btn btn-danger m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                > Delete </button>
                <br />
            </React.Fragment>
        );
    }

    formatCount() {
        const count = this.props.counter.value; 
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;