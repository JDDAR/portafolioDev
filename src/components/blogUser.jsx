/* eslint-disable react/prop-types */
import '../stylesSheet/blogUser.css'
function BlogUser(props) {
  return (
    <section className="blog_section">
      <div className='public_blog mb-4' >
        <div className="blog_img mb-4">
          <img
            src={`blog-${props.imgBlog}.jpg`}
            alt="Fotografia con un computador de contenido  " />
        </div>
        <div className="text_blog">
          <div className="title_blog mb-2">
            <h2>{props.titleBlog}</h2>
          </div>
          <div className="fecha_blog mb-2">
            <span><img src="./calendar.svg" alt="icono de un calendario" />{props.datePublication} </span>
          </div>
          <div className="text_blog p-text mb-4">
            <p>{props.publicationText} </p>
          </div>
          <div className='blog_link mb-4  '>
            <a href="#" className='button-primary'> Lear More </a>
            <span><img src="./chat.svg" alt="icono de comentarios realizados" />2</span>
          </div>
        </div>
      </div>

    </section>


  )
}
export default BlogUser