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
    console.log(this.props)
    try {
        let status = await this.props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
    });

        console.log(status)
      } catch (err) {
        console.log(err)
    }

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