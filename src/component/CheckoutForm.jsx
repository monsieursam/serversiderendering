import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements-universal';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let token = await this.props.stripe.createToken({name: "Name"});
    console.log(token)

    let {status} = await this.props.stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);