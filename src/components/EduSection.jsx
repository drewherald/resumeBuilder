import '../styles/resume.css'


export default function EduSection({school, locationEdu, degree, startEdu, endEdu}) {

    
  return (
    <>
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
    </>
  )
}