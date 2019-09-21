import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from "firebase";

class BrowserArticle extends Component {
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

    return <div className="articles">
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
  }
}

export default BrowserArticle