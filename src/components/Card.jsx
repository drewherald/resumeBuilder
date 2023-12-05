import '../styles/card.css'
import upArrow from '../assets/arrow-up-svgrepo-com.svg'
import downArrow from '../assets/arrow-down-svgrepo-com.svg'
import { useState } from 'react'



export default function Card({title, list, button}) {

  const [isActive, setActive] = useState(true)

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive)
  }

  return (
    <div className='cardBox'>
        <div>
            <section className='head'>
                <h2>{title}</h2> <img src={isActive ? upArrow: downArrow} alt="" 
                onClick={toggleClass} />
            </section>    
            <form className={isActive ? 'active': 'none'}>
                {list}
                {button}
            </form>
        </div>
    </div>
  )
}
