import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from "firebase";

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
    console.log(this.state.article)

    return <Fragment>
      <div className="back"><Link className="back" to="/">Retour en arriere</Link></div>
        <div className="article-part">
          <div className="image">
              <img src={this.state.article.image} />
          </div>
          <div className="text">
              {this.state.article.description}
          </div>
        </div>
      </Fragment>
  }
}

export default Article