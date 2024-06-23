import React from 'react'
import {motion} from "framer-motion"
import img from '../../assets/jpgg.jpg'

const options={
  initial:{
    x:"-100%",
    opacity:0,
  },
whileInView:{
  x:0,
  opacity:10,
}


}

function Founder() {
  return (
    <section className='founder'>
      <motion.div
      {...options}>
        <img src={img} alt='Founder'height={200} width={250}/>
      
      <h3>Himani Chaudhari</h3>
      <p>
        Hey,Everyone I am Himani Chaudhari,the founder of MCA Burger Wala.
        <br/>
        Our aim is to create the most tasty burger on planet.
      </p>
      </motion.div>
    </section>
  )
}

export default Founder