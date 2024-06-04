// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbab';
import Counters from './components/counters';
// import axios from 'axios';
// import Doctors from './components/doctors';  

import {Link } from 'react-router-dom';
import RequiredFieldForm from './components/requiredFieldForm';

class App extends Component {
  state = {
    doctors: [],
    currentDoctor: {},
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 0 },
        { id: 4, value: 2 },
    ]
  }

  handleDelete = (id) => {
      // console.log('handleDelete called: id = ', id);
      const counters = this.state.counters.filter(c => c.id !== id);
      this.setState({ counters });
  } 
  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }
  handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
  }
  handleAdd = () => {
      const counters = [...this.state.counters];
      let newId = 1;
      if (counters.length) {
          newId = counters[counters.length - 1].id + 1;
      } 
      counters.push({id: newId, value: 0});
      this.setState({counters: counters});
  }
  handleCurrentDoctor = (e) => {
    const doc = this.state.doctors.find(d => d.id === +e.target.value);
    this.setState({currentDoctor: doc});    
  }
  render() {
    return (
      <React.Fragment>

        <NavBar totalItems={this.state.counters.length}></NavBar>
        {/* <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul> */}
        <h3>Hello my first deployed web app</h3>
        <main className='container'>
          <p>Form Validation</p>
          <RequiredFieldForm></RequiredFieldForm>
          <hr />
          {/* <p>Current Doctor: {this.state.currentDoctor.name}</p>
          <Doctors 
            doctors={this.state.doctors}
            onCurrentDoctor={this.handleCurrentDoctor}
            />  */}
          <hr />
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onIcrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
