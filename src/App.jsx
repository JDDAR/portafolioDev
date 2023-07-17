import { useState } from 'react'
import './App.css'
import CardsProfile from './components/profileCards'

function App() {
  const [isEstructureT2, setIsEstructureT2] = useState(false);
  return (
    <section className='Container_Primary' >
      <p className={ `estructure ${isEstructureT2 && "EstructureT2"}`} onClick={() => setIsEstructureT2(!isEstructureT2)} >E</p>
      <div className={`estructureUser ${isEstructureT2 && "EstructureT2"}`}>
        <div className={`data_user ${isEstructureT2 && "EstructureT2"}`}>
          <CardsProfile
          />
        </div>
        <div className={`skills_user ${isEstructureT2 && "EstructureT2"}`}></div>
        <div className={`blog_user ${isEstructureT2 && "EstructureT2"}`}></div>
        <div className={`hobbies_user ${isEstructureT2 && "EstructureT2"}`}></div>
        <div className={`experiences_user ${isEstructureT2 && "EstructureT2"}`}></div>
        <div className={`projects_user ${isEstructureT2 && "EstructureT2"}`}></div>
        </div>
    </section>
  )

}

export default App
