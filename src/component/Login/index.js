import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase'

import './Login.scss'

class Sign extends Component {

  constructor(props) {
    super(props)

    this.state = {
      emailSignUp: '',
      passwordSignUp : '',
      emailSignIn: '',
      passwordSignIn: ''
    }
  }

  signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.emailSignUp, this.state.passwordSignUp).catch(function(error) {
      // Handle Errors here.
      console.log(errorCode)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  signIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.emailSignIn, this.state.passwordSignIn).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className='sign'>
      <div className='login' >
        <h2>Login</h2>
        <div className=''>
          <label>Email</label><br/>
          <input placeholder='Email' name='emailSignIp' type='text' value={this.state.emailSignIp} onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Password</label><br/>
          <input placeholder='Password' name='passwordSignIn' type='password' value={this.state.passwordSignIn} onChange={this.handleInputChange} />
        </div>
        <div>
          <input type='button' value="Connexion"/>
        </div>
      </div>
      <div className='sign_up'>
        <h2>Sign up</h2>
        <div>
          <input placeholder='Email' name='emailSignUp' type='text' value={this.state.emailSignUp} onChange={this.handleInputChange} />
        </div>
        <div>
          <input placeholder='Password' name='passwordSignUp' type='password' value={this.state.passwordSignUp} onChange={this.handleInputChange} />
        </div>
        x Newsletter
        x Homme Femme
        <select>
          <option>
            Pays
          </option>
        </select>
        <input type='button' onClick={() => this.signUp()} value="Inscription" />
      </div>
    </div>
  }
}

export default Sign