/* eslint-disable react/prop-types */
import '../stylesSheet/projectsUser.css'

export default function BarProjects(props) {
  return (
    <section className="bar_projects ">
      <a href="#" className='button-secund' >{props.tecnologi}</a>
    </section>
  )
}

export function ProjectsUser(props) {
  return (
    <section className='content_project card box-shadow pad-4'>
      <div className='img_project'>
        <img src={`project-${props.imgProject}.png`} alt="miniatura imagen projecto" />
      </div>
      <div className="text_projects">
        <div className='leguajes_project mb-2'>
          <div>{props.lenguaje1} </div>
          <div>{props.lenguaje2} </div>
          <div>{props.lenguaje3} </div>
          <div>{props.lenguaje4} </div>
          <div>{props.lenguaje5} </div>
          <div>{props.lenguaje6} </div>
          <div>{props.lenguaje7} </div>
          <div>{props.lenguaje8} </div>
          <div>{props.lenguaje9} </div>
        </div>

        <div className="title_project mb-2">
          <h2>{props.titleProject}</h2>
        </div>
        <div className='paragraph_project p-text mb-4' >
          <p>{props.textProject} </p>
        </div>
        <div className='button_projects'>
          <a href={`${props.demoLink}`} target='_blank' className='button-primary' rel="noreferrer">Demo</a>
          <a href={`${props.codeLink}`} target='_blank' rel="noreferrer" className='button-primary'>Code</a>
        </div>
      </div>
    </section>
  )
}

export function PaginationProjects() {
  return (
    <nav className="paginationProjects mb-4">
      <ul className="pagination">
        <li>
          <a href="" className='button-pag icon-pagination icon-left'>
            <img src="./next-left.svg" alt="icono indicando devolver una pagina" />
          </a>
        </li>
        <li><a href="" className='button-pag'>1</a></li>
        <li><a href="" className='button-pag active'>2</a></li>
        <li><a href="" className='button-pag'>3</a></li>
        <li><a href="" className='button-pag'>4</a></li>
        <li><a href="" className='button-pag'>5</a></li>
        <li><a href="" className='button-pag icon-pagination icon-right'>
            <img src="./next-right.svg" alt="" />
        </a>
        </li>
      </ul>
    </nav>
  )
}