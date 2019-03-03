import React, { Component } from 'react';
import './App.css';
import './components/PhoneForm';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';

class App extends Component {

  id = 0;
  state = {
    //information: [],
    info: {},
  }

  handelCreate = (param) => {
    //const { data } = this.state;
    this.setState({
      // information: information.concat({
      //   ...data,
      //   id: this.id++,
      // })
      info: {
        name: param.name,
        phone: param.phone,
        id: this.id++,
      },
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handelCreate}/>
        <PhoneInfo data={this.state.info} />        
      </div>
    );
  }
}

export default App;
