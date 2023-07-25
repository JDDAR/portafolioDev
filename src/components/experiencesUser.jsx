/* eslint-disable react/prop-types */
import '../stylesSheet/experienceUser.css'

export function ExperienceUser(props) {
  return (
    <section className="content_experience">
      
        <div className="logo_experience">
          <img src={`experience-${props.imgExperience}.png`} alt="" />
        </div>
        <div className="text_experience">
          <div className="data_experience">
            <span>{props.fechaExperence} </span>
            <p>{props.position}</p>
          </div>
          <div className="descrip_experience p-text mb-2">
            <p>{props.textExperience}</p>
          </div>
        </div>

    </section>
  )
}
