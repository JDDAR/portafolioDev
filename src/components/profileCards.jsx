/* eslint-disable no-unused-vars */
import React from "react";
import '../stylesSheet/profileCards.css';

function CardsProfile(props) {
  return (
    <section className='card'>
      <div className='img_profile'>
        <img
          className='imageProfile'
          src= '../img/profile_User01.jpg'
          alt='Usuario Uno Jose' />
      </div>
    </section>
  )
}
export default CardsProfile