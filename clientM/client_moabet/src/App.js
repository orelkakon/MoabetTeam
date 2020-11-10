import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header, { header } from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import ChatPage from './Components/ChatPage'
import BirthdayPage from './Components/BirthdayPage';
import DebtsPage from './Components/DebtsPage';
import WheelL from './Components/WheelL';
import AlcoholCalc from './Components/AlcoholCalc';
import Gallery from './Components/Gallery';
import RelationshipStatus from './Components/RelationshipStatus';
import WallOfShame from './Components/WallOfShame';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user_pass_db: [],
      user: '',
      pass: ''
    }
    fetch(`http://localhost:3001/getdata`)
      .then(response => response.json())
      .then(response => this.setState({ user_pass_db: response }))
  }

  loginHandle = () => {
    this.setState(prevLoggedIn => ({
      loggedIn: !prevLoggedIn.loggedIn
    }))
  };

  checkIfExists(u, p){
    for (var i = 0; i < this.state.user_pass_db.length; i++) {
      if (this.state.user_pass_db[i].user === u && this.state.user_pass_db[i].pass === p) {
        return true;
      }
    }
    return false;
  }

  check_login(u, p){
    if (u === '' || p === '') {
      return false;
    }
    else if (this.state.loggedIn == false) {
      if (this.checkIfExists(u, p)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }


  render() {
    return (
      <Router>
        <Header />
        <div className="App">
          <Route path="/About" exact strict render={
            () => (
              <About />
            )
          } />
          <Route path="/BirthdayPage" exact strict render={
            () => (
              this.state.loggedIn ? (<BirthdayPage data={this.state.user_pass_db} />) : (<Redirect to='/' />)

            )
          } />
          <Route path="/WheelL" exact strict render={
            () => (
              this.state.loggedIn ? (<WheelL />) : (<Redirect to='/' />)

            )
          } />
          <Route path="/AlcoholCalc" exact strict render={
            () => (
              this.state.loggedIn ? (<AlcoholCalc />) : (<Redirect to='/' />)

            )
          } />
          <Route path="/Gallery" exact strict render={
            () => (
              this.state.loggedIn ? (<Gallery users={this.state.user_pass_db} />) : (<Redirect to='/' />)
            )
          } />
          <Route path="/ChatPage" exact strict render={
            () => (
              this.state.loggedIn ? (<ChatPage user={this.state.user} />) : (<Redirect to='/' />)
            )
          } />
          <Route path="/DebtsPage" exact strict render={
            () => (
              this.state.loggedIn ? (<DebtsPage user={this.state.user} others={this.state.user_pass_db} />) : (<Redirect to='/' />)
            )
          } />
          <Route path="/RelationshipStatus" exact strict render={
            () => (
              this.state.loggedIn ? (<RelationshipStatus users={this.state.user_pass_db} />) : (<Redirect to='/' />)
            )
          } />
          <Route path="/WallOfShame" exact strict render={
            () => (
              this.state.loggedIn ? (<WallOfShame users={this.state.user_pass_db} />) : (<Redirect to='/' />)
            )
          } />
          <Route path="/" exact strict render={() => <>
            <header className="App-header">
              <h1 style = {{fontFamily: "Comic Sans MS"}}>Welcome Here Moabet Team!</h1 >
              <h4  style = {{fontFamily: "Comic Sans MS"}}>Login</h4>
              <input type='text' disabled = {this.state.loggedIn} className="user" placeholder='username...' onChange={e => this.setState({ user: e.target.value })}></input>
              <br />
              <input type='text' disabled = {this.state.loggedIn} className="pass" placeholder='password...' onChange={e => this.setState({ pass: e.target.value })}></input>
              <br />
              <input type="button" id='buttonLogIn'
                value={'get in my bro'}
                disabled={this.state.loggedIn}
                onClick={() => {
                  if (this.check_login(this.state.user, this.state.pass)) {
                    this.loginHandle(this.state.loggedIn);
                    alert('Logged In')
                  }
                }
                }
              />
              <br />
              <input type="button" id='buttonLogOut'
                value={'get out my bro'}
                disabled={!this.state.loggedIn}
                onClick={() => {
                  if (this.state.loggedIn) {
                    this.setState({ user: '', pass: '' })
                    this.loginHandle(this.state.loggedIn);
                    alert('Logged Out')
                  }
                }
                }
              />
            </header>
          </>
          }>
          </Route>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
