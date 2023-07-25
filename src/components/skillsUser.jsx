/* eslint-disable react/prop-types */
import '../stylesSheet/skillsUser.css'
function SkillUser(props) {
  return (
    <section>

      <div className="progress_skills ">
        <div className="progress_Info">
          <div className="progress_label">
            <span>{props.leguaje}</span>
          </div>
          <div className="progress_porcentaje">
            <span>{props.porcentaje}%</span>
          </div>
        </div>
        <div className="progress shadow-inset  ">
          <div className='progress_bar_one' style={{width:`${props.porcentaje}%`}}  >
            <span className="BarS"></span>
          </div>
        </div>
      </div>

      
    </section>
  )
}
export default SkillUser
