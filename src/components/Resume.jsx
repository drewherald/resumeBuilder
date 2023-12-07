import '../styles/resume.css'
import EduSection from './EduSection'
import ExpSection from './ExpSection'





export default function resume({information, save, saveTwo}) {

    let firstLast = information.firstLast
    let email = information.email
    let tel = information.tel
    let address = information.address
    let school = information.school
    let degree = information.degree
    let startEdu = information.startEdu
    let endEdu = information.endEdu
    let locationEdu = information.locationEdu
    let company = information.company
    let position = information.position
    let startExp = information.startExp
    let endExp = information.endExp
    let locationExp = information.locationExp
    let description = information.description

    let checker = true

    for(let i=0; i<save.length; i++){
        if(typeof save[i] != 'string' || undefined){
            checker = false
        }
    }
    
    if(information.school!=="" && information.school!==undefined){
        checker = false
    }
    

    let saveTwoChecker = true

    for(let i=0; i<saveTwo.length; i++){
        if(typeof saveTwo[i] != 'string' || undefined){
            saveTwoChecker = false
        }
    }

    if(information.company!=="" && information.company!==undefined){
        saveTwoChecker = false
    }

  return (
    <div className='container'>
      <section className='header'>
        <h1 className='headText'>{firstLast}</h1>
        <p>{email} {tel == "" || tel == null ? "":"||"} {tel} {address == "" || address == null? "":"||"} {address}</p>
      </section>
      <section className='education'>
        <h1 className='eduTitle'>{checker ? "":"Education"}</h1>
        {...save}
        <EduSection school={school} locationEdu={locationEdu} degree={degree} startEdu={startEdu} endEdu={endEdu} />        
      </section>
      <section className='experience'>
        <h1 className='eduTitle'>{saveTwoChecker ? "":"Work Experience"}</h1>
        {...saveTwo}
        <ExpSection company={company} position={position} startExp={startExp} endExp={endExp} locationExp={locationExp} description={description}/>
      </section>
    </div>
  )
}
