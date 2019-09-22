import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from "firebase";

import './Article.scss'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: {},
      selectedSize: ''
    }
  }

  clickedOnSize = size => {
    console.log(size)

    this.setState({
      selectedSize: size
    })
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

    console.log(this.state.article)
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
            <p>
              {this.state.article.description}
            </p>
            <p>
              {this.state.article.material}
            </p>
            <p>
              {this.state.article.availability}
            </p>
            <p>
              {this.state.article.sizes && this.state.article.sizes.map(size => (
              <button text={size} onClick={event => this.clickedOnSize(size)}>{size}</button>
              ))}
            </p>
            <button text="Ajouter au panier">Ajouter au panier</button>
            <p>
              {this.state.article.cut}
            </p>
            <p>
              {this.state.article.madein}
            </p>
          </div>
        </div>
      </div>
  }
}

export default Article