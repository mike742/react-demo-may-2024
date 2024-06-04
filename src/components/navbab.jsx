import React, { Component } from 'react';


class NavBar extends Component {
    // state = {  } 
    render() { 
        console.log('props', this.props);
        return (
            <nav className="navbar bg-body-tertiary m-4">
                {/* <div className="container"> */}
                    <img src="https://picsum.photos/50" alt="Bootstrap" width="30" height="24"/> 
                    <h3>{this.props.totalItems}</h3>
                {/* </div> */}

            </nav>
        );
    }
}
 
export default NavBar;