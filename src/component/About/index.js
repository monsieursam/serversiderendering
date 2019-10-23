import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import first from '../../img/patrick-hendry-633205-unsplash.jpg'
import second from '../../img/los-angeles-1790986_1920.jpg'

import './About.scss'

class About extends Component {
  render() {
    return <div className='about'>
      <div className='aboutus-text'>
      <h1>About Us</h1>
      <p>
        KRASH /29® est une marque française de vêtements street-wear haut de gamme crée par Eleonore Lugassy, qui s’inspire de la culture parisienne, new-yorkaise et tokyoïtes.
</p>
<p>
  Cette marque parisienne fondée en 2019 puise son inspiration dans les villes effervescentes telles que Tokyo, Los Angeles, New York et Paris.
</p>
<p>
  Nous travaillons les vêtements de sorte à ce que les t-shirts, les pantalons, les sacoches, les chest-bags, les hoodies et les manteaux s’accordent dans une coupe unisexe. Nous mettons en valeur le style masculin-féminin à travers notre vision de la culture street-wear.
</p>
<p>
  Notre nom KRASH /29® trouve son origine dans l’historique clash boursier de 1929.

</p>
<p>
  En effet, cet événement a entraîné le monde dans une récession et une crise considérable. Cependant, cela a introduit la société dans une nouvelle phase, avec des avancées technologique et économique qui ont a jamais, changer la face du monde. À savoir, la technologie, les médias, la politique, la société et bien sûr, la mode.
</p>
<p>
  Notre marque KRASH /29® trouve son inspiration dans les mouvements sociaux qui ont conduit le monde à sa renaissance et qui ont façonné le monde moderne et cosmopolite que nous connaissons aujourd’hui.
</p>
      </div>
      <div className='aboutus-images'>
        <div className='first'>
          <img src={second} />
        </div>
        <div className='second'>
          <img src={first} />
        </div>
      </div>
    </div>
  }
}

export default About