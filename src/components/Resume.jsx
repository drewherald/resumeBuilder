import '../styles/resume.css'

export default function resume({information}) {

    let firstLast = information.firstLast
    let email = information.email
    let tel = information.tel
    let address = information.address
    let school = information.school
    let degree = information.degree
    let startEdu = information.startEdu
    let endEdu = information.endEdu
    let locationEdu = information.locationEdu

    

  return (
    <div className='container'>
      <section className='header'>
        <h1 className='headText'>{firstLast}</h1>
        <p>{email} {tel == "" ? "":"||"} {tel} {address == "" ? "":"||"} {address}</p>
       {/*} <h1>Drew Herald</h1>
        <p>drewherald9@gmail.com || 859-317-1475 || 1417 Glenview Dr, Lexington KY 40514</p> {*/}
      </section>
      <section className='education'>
        <h1 className='eduTitle'>{school == "" ? "":"Education"}</h1>
        <div className='eduText'>
            <div>
                <p><b>{school}</b></p>
                <p>{locationEdu}</p>
                <p>{degree}</p>
            </div>
            <div>
                <p>{startEdu} {startEdu == "" ? "":"-"} {endEdu}</p>
            </div>
        </div>
      </section>
    </div>
  )
}
