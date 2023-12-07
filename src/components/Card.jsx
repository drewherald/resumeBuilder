import '../styles/card.css'
import upArrow from '../assets/arrow-up-svgrepo-com.svg'
import downArrow from '../assets/arrow-down-svgrepo-com.svg'
import SaveData from './SaveData'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';




export default function Card({title, list, button, save}) {

  const [isActive, setActive] = useState(true)

  const toggleClass = () => {
    setActive(!isActive);
  }

  let saveArr = save

    try{
      saveArr = saveArr.map((x) => <SaveData name={x[0]} key={uuidv4()} click={x[1]} bool={x[2]}/>)
    }catch(e){
      console.log()
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
            {saveArr}
        </div>
    </div>
  )
}
