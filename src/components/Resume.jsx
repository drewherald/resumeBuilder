import '../styles/resume.css'
import EduSection from './EduSection'





export default function resume({information, save}) {

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

    if(save[0]!=null){
        checker= false
    }else if(information.school!==""){
        checker = false
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
    </div>
  )
}
