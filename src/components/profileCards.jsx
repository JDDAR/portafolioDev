/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import '../stylesSheet/profileCards.css';

function CardsProfile(props) {
  return (
    <section className='content_User'>
      <div className='img_profile pad-4'>
        <img
          className="rounded"
          src={`profile-${props.imgUser}.jpg`}
          alt="imagen de perfil" />
      </div>
      <div className="desc_User pad-4 ">
        <h2 className="h3 mb-2">{props.PrimerNombre} {props.SegundoNombre} {props.PrimerApellido} {props.SegundoApellido}</h2>
        <div className="profile_icon mb-2">
          <ul>
            <li><a href={`${props.gitLink}`} target="_blank" rel="noreferrer"  ><img src="./github.svg" alt="" /></a></li>
            <li><a href={`${props.instagramLink}`} target="_blank" rel="noreferrer" ><img src="./instagram.svg" alt="" /></a></li>
            <li><a href={`${props.linkedingLink}`} target="_blank" rel="noreferrer" ><img src="./linkedin.svg" alt="" /></a></li>
            <li><a href={`${props.twitterLink}`} target="_blank" rel="noreferrer" ><img src="./twitter.svg" alt="" /></a></li>
          </ul>
        </div>
        <span className="profess_User p-text">{props.profession}</span>
        <p className="p-text">{props.perfil}</p>
      </div>
    </section>
  )
}
export default CardsProfile