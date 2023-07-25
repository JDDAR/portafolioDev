import { useState } from 'react'
import './App.css'
import CardsProfile from './components/profileCards'
import SkillUser from './components/skillsUser'
import BlogUser from './components/blogUser';
import HobbiesUser from './components/hobbiesUser';
import BarProjects, { ProjectsUser, PaginationProjects } from './components/projectsUser';
import { ExperienceUser } from './components/experiencesUser';

function App() {
  const [isEstructureT2, setIsEstructureT2] = useState(false);

  return (
    
    <section className='Container_Primary' >
      <section className="nav-button ">
        <nav className="buttons">
          <a href="#" className={`buton-themes ${isEstructureT2 && "EstructureT2"} button-secund`} onClick={() => setIsEstructureT2(!isEstructureT2)} >
            <img src="./columns1.svg" alt="" />
          </a>
          <a href="#" className={`buton-themes ${isEstructureT2 && "EstructureT2"} button-secund`} onClick={() => setIsEstructureT2(!isEstructureT2)} >
            <img src="./columns2.svg" alt="" />
          </a>
        </nav>
      </section>

    {/* Contenedor general del contenido */}
      <div className={`estructureUser ${isEstructureT2 && "EstructureT2"}`}>
        {/* cards Profile ***************************************************************** */}
        <div className={`data_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className={`container-data ${isEstructureT2 && "EstructureT2"}  card box-shadow`}>
            <CardsProfile
              imgUser='jose'
              PrimerNombre='Jose'
              SegundoNombre='Daniel'
              PrimerApellido='Anacona'
              SegundoApellido='Ramirez'

              gitLink='https://github.com/JDDAR'
              linkedingLink='https://www.linkedin.com/in/josedanielanacona/'
              twitterLink='https://twitter.com/Jdaniel106'

              profession='Desarrollador web'
              perfil='Estoy enfocando en ser un gran programador. El proceso no ha sido sencillo pero cada proyecto y trabajo que he logrado ha sido un gran aprendizaje, me voy llenando confianza para seguir entusiasta en esta carrera, manteniendo grandes expectativas a futuro, centrando mis valores en el compromiso el orden y la eficiencia'
            />
          </div>

        </div>

        {/* Skills ***************************************************************** */}

        <div className={`skills_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className="skill-content card box-shadow pad-4">
            <div className='title-section mb-4'><h3>Skills</h3></div>
            <SkillUser
              leguaje='css'
              porcentaje='80'
            />
            <SkillUser
              leguaje='JavaScript'
              porcentaje='60'
            />
            <SkillUser
              leguaje='React'
              porcentaje='40'
            />
            <SkillUser
              leguaje='Php'
              porcentaje='50'
            />
          </div>
        </div>

        {/* blog  ***************************************************************** */}

        <div className={`blog_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className="contenedor-blog card shadow-inset">
            <div className='title-section title-blog'><h3>Blog</h3></div>
            <BlogUser
              imgBlog='public1'
              titleBlog='Cómo utilizar negrita en CSS: Aprende a resaltar tu contenido'
              datePublication='29 de julio del 2023'
              publicationText='En este tutorial, vamos a explorar diferentes formas de utilizar la propiedad CSS para poner negrita en el texto de tus páginas web. La negrita es una herramienta poderosa para resaltar partes importantes de tu contenido y darle énfasis a tus mensajes clave. Acompáñanos en este viaje y descubre cómo puedes utilizar CSS para lograr este efecto de manera creativa y efectiva.'
            />
            <BlogUser
              imgBlog='public2'
              titleBlog="Google ya tiene su propio ' Pokémon GO': Space Invaders regresa en realidad aumentada"
              datePublication=' 18 Julio 2023'
              publicationText="45 años, ni más ni menos, cumple ' Space Invaders'. Uno de los juegos más icónicos de la historia reciente resurge ahora a manos de Google y TAITO, el desarrollador original del juego. 'SPACE INVADERS: World Defense', es la nueva propuesta para iOS y Android que nos invita a salir de casa y revivir el mundo de Invaders en realidad aumentada."
            />
          </div>
        </div>

        {/* Hobbies ***************************************************************** */}

        <div className={`hobbies_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className='contenedor-hobbie card box-shadow'>
            <div className='title-section pad-4'><h3>Hobbies</h3></div>
            <HobbiesUser
              imgHobbies='music'
              nombreHobbie='Musica'
              textsHobbie='indicates that the server encountered an unexpected condition that prevented it from fulfilling the request'
            />
            <HobbiesUser
              imgHobbies='cine'
              nombreHobbie='Cine'
              textsHobbie='indicates that the server encountered an unexpected  it from fulfilling the request'
            />
            <HobbiesUser
              imgHobbies='ciclismo'
              nombreHobbie='Ciclismo'
              textsHobbie='indicates that the server encountered an unexpected conditithe request'
            />
          </div>
        </div>

        {/* Experience  ***************************************************************** */}

        <div className={`experiences_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className="content-experience card box-shadow pad-4">
            <div className='title-section mb-4'><h3>Experiences</h3></div>
            <section className={`section-experience ${isEstructureT2 && "EstructureT2"}`}>
              <ExperienceUser
                imgExperience='spotify'
                fechaExperence='17 julio 2023'
                position='Front-end developer'
                textExperience='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
              />
              <ExperienceUser
                imgExperience='ducati'
                fechaExperence='23 oct 2011'
                position='Front-end developer'
                textExperience='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
              />
            </section>
          </div>

        </div>

        {/*  Projects  ***************************************************************** */}
        <div className={`projects_user ${isEstructureT2 && "EstructureT2"}`}>
          <div className="card box-shadow pad-4 ">
            <div className='title-section mb-2'>
              <h3>Projects</h3>
            </div>
            <div className="bar-Projects">
              <BarProjects
                tecnologi='JavaScript'
              />
              <BarProjects
                tecnologi='React'
              />
              <BarProjects
                tecnologi='css'
              />
            </div>
          </div>
          <div className={`section-projects ${isEstructureT2 && "EstructureT2"}`} >

            <ProjectsUser
              imgProject = 'Recipeblog'

              lenguaje1='#HTML'
              lenguaje2='#CSS'
              lenguaje3='#Responsive'

              titleProject='Recipe Blog'
              textProject='In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io'

              demoLink='https://jddar.github.io/RecipeBlog/'
              codeLink='https://github.com/JDDAR/RecipeBlog'

            />
            <ProjectsUser
              imgProject='MyGalery'

              lenguaje1='#HTML'
              lenguaje2='#CSS'
              lenguaje3='#Responsive'

              titleProject='My Galery'
              textProject='In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io'
              
              demoLink='https://jddar.github.io/MyGallery/'
              codeLink='https://github.com/JDDAR/MyGallery'
            />
            <ProjectsUser
              imgProject='eddie'

              lenguaje1='#HTML'
              lenguaje2='#CSS'
              lenguaje3='#Responsive'

              titleProject='Eddie Web'
              textProject='In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io'
              demoLink='https://jddar.github.io/EddiPage/'
              codeLink='https://github.com/JDDAR/EddiPage'


            />

          </div>
          <div className="projects-pagination">
            <div className='number-pagination'>
              <PaginationProjects />
            </div>
          </div>


        </div>
      </div>
    </section>
  )

}

export default App
