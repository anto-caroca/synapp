import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './Pages/Home';
import Friends from './Pages/Friends';
import Events from './Pages/Events';
import Games from './Pages/Games';
import Register from './Pages/Register'
import Login from './Pages/Login'
import LogoMini from './Components/Logo/Logo'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import '../src/style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuthWithFacebook = this.handleAuthWithFacebook.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleAuthWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`error ${error.code}: ${error.message}`));
  }
  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`error ${error.code}: ${error.message}`));
  }
  renderLoginButton() {
    // si el usuario está logueado
    if (this.state.user) {
      return (
        <div>
          <div className="nav-wrapper blue-grey darken-4">
          <div className="container">
          <LogoMini />

          <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li className="hrz"><button onClick={this.handleLogout}>Salir</button></li>
        <li className="hrz"><img width='40' className="avatar" src={this.state.user.photoURL} alt={this.state.user.displayName} /> 
        {this.state.user.displayName}</li>
      </ul>   
          </div>
          </div>
          <Router>
              <div>
                <Route path="/home" component={Home} />
                <Route path='/friends' component={Friends} />
                <Route path='/events' component={Events} />
                <Route path='/games' component={Games} />
                <Redirect to="/home" className="link">Profile</Redirect>
              </div>
            </Router>
        </div>
      );
    } else {
      return (
        <div>
           <Router>
              <div>
                <Link to="/register" className="link">Registro </Link>
                <Link to="/" className="link"> Inicio</Link>
                <Link to="/login" className="link"> Login</Link>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/r" component={App} />
              </div>
            </Router>
        </div>
      );
    }
  }
  // display users in my template
  render() {
    return (
      <div className="App">
        {this.state.users}
        {this.renderLoginButton()}
      </div>
    );
  }
}
export default App;