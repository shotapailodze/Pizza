import React from 'react'
import '../styles/About.css'
import MultipplePizzas from '../assets/multiplePizzas.jpeg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultipplePizzas})`}}>

        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
            Welcome to Bella Napoli Pizzeria, where the art of pizza-making is a cherished tradition passed down through generations. Established in the heart of our city in 1985, Bella Napoli has been a beacon for pizza lovers seeking an authentic Italian experience like no other.
<br></br>
<br></br>
Our Origins:
Inspired by the vibrant streets of Naples, Italy, our pizzeria was founded by Giovanni Russo, a passionate chef with a dream to bring the true essence of Neapolitan cuisine to our community. Guided by his culinary heritage, Giovanni embarked on a journey to create the most exquisite and mouthwatering pizzas in town.
<br></br>
<br></br>
Craftsmanship and Quality:
At Bella Napoli, we believe that a great pizza is an art form. From hand-tossed dough that’s made fresh daily to the selection of the finest local and imported ingredients, every step of our pizza-making process is infused with care and dedication. Our sauces are slow-simmered to perfection, and our toppings are sourced from local farmers who share our commitment to quality.
            </p>
        </div>
    </div>
  )
}

export default About