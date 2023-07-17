/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import '../stylesSheet/profileCards.css';

function CardsProfile(pops) {
  return (
    <section className='card box-shadow'>
      <div className="content_User" >
        <div className='img_profile pad-4'>
          <img className="rounded" src='profile_User01.jpg' alt="imagen de perfil" />
        </div>

        <div className="desc_User pad-4 ">
          <h2 className="h3 mb-2">Jose Daniel Anacona</h2>
          <div className="profile_icon mb-4">
            <ul>
              <li><a href="#"><img src="./github.svg" alt="" /></a></li>
              <li><a href="#"><img src="./instagram.svg" alt="" /></a></li>
              <li><a href="#"><img src="./linkedin.svg" alt="" /></a></li>
              <li><a href="#"><img src="./twitter.svg" alt="" /></a></li>
            </ul>
          </div>

          <span className="profess_User p-text">Desarrollador web</span>

          <p className="p-text">
            Estoy enfocando en ser un gran programador. El proceso no ha sido sencillo pero cada proyecto y trabajo que he logrado ha sido un gran aprendizaje, me voy llenando cada vez más de confianza para seguir entusiasta en esta carrera, manteniendo grandes expectativas a futuro, centrando mis valores en el compromiso el orden y la eficiencia
          </p>
        </div>

      </div>
    </section>
  )
}
export default CardsProfile