import React, {Fragment, Component } from 'react';
import { Switch, Route, BrowserRouter, Link,  } from 'react-router-dom'
import * as firebase from "firebase";

import Header from './Header'

import './App.css';

import Article from './Article';

var firebaseConfig = {
      apiKey: "AIzaSyBYCgXlXQYKhQ2viYpKheg9zO0V2qzt8dg",
      authDomain: "krash29-faf02.firebaseapp.com",
      databaseURL: "https://krash29-faf02.firebaseio.com",
      projectId: "krash29-faf02",
      storageBucket: "krash29-faf02.appspot.com",
      messagingSenderId: "981457561077",
      appId: "1:981457561077:web:7bf1deabcc611af6496cbc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    var db = firebase.firestore();
    var articles = []
    db.collection("articles").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc)
        articles.push({...doc.data(), id: doc.id})
      });
      this.setState({
        articles
      })
    })
    
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact component={() =>
            <div className="articles">
              {this.state.articles.map(article => (
                <Link className="go-to" to={`/article/${article.id}`}>
                <div className="article">
                    <div>
                      <img src={article.image}></img>
                    </div>
                    <div>
                      {article.name}
                      {article.price}
                      {article.availability}
                    </div>
                </div>
              </Link>
              ))}
            </div>
          }>
          </Route>
        <Route path='/article/:id' exact component={Article} />
        </Switch>
      </div>
    );
  }
}

export default App;
