import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from "firebase";

import './Article.scss'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: {}
    }
  }

  componentDidMount() {
    var db = firebase.firestore();
    var article = {}
    console.log(this.props)
    db.collection(`articles/`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.id === this.props.match.params.id) {
          article = {...doc.data(), id: doc.id}
        }
      });
      this.setState({
        article
      })
    })
  }

  render() {
    return <div className='article'>
      <div className="back"><Link className="back" to="/">Back</Link></div>
        <div className="article-part">
          <div className="image">
              <img src={this.state.article.image} />
          </div>
          <div className="text">
            <h2>
              {this.state.article.title}
            </h2>
            <p>
              € {this.state.article.price}
            </p>
            <p>
              {this.state.article.titledeux}
            </p>
            
          </div>
        </div>
      </div>
  }
}

export default Article