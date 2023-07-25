/* eslint-disable react/prop-types */

import '../stylesSheet/hobbiesUser.css'

function HobbiesUser(props) {
  return (
    <section className='pad-3 mb-4'>
      <div className="sectionHobbies">
        <div className='img_hobbies'>
          <img src={`hobbies-${props.imgHobbies}.jpg`} alt="" />
        </div>
        <div className='text_hobbies p-text'>
          <span> {props.nombreHobbie} </span>
          <p> {props.textsHobbie} </p>
        </div>
      </div>
    </section>
  )
}
export default HobbiesUser