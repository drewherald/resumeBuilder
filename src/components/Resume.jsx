import '../styles/resume.css'





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
        <p>{email} {tel == "" ? "":"||"} {tel} {address == "" ? "":"||"} {address}</p>
      </section>
      <section className='education'>
        <h1 className='eduTitle'>{checker ? "":"Education"}</h1>
        <div className='eduText'>
            <div>
                <p><b>{school}</b></p>
                <p>{locationEdu}</p>
                <p>{degree}</p>
            </div>
            <div>
                <p>{startEdu} {startEdu == "" || startEdu == null ? null:"-"} {endEdu}</p>
            </div>
            
        </div>
        {...save}
      </section>
    </div>
  )
}
