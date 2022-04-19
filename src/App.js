import React, { Component } from 'react';
import './App.css';
import CustomForm from './components/CustomForm.js';

class App extends Component {
  onSubmitForm = (dataForm) => {
    console.log('ENVIANDO DATOS', dataForm);
    /// usar aquí axios o fetch
  };

  render() {
    return (
      <div className="form-container">
        <CustomForm onSubmitForm={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
