import '../styles/resume.css'


export default function EduSection({school, locationEdu, degree, startEdu, endEdu}) {

    
  return (
    
        <div className='eduText'>
            <div className='flexChild'>
                <p><b>{school}</b></p>
                <p>{degree}</p>
            </div>
            <div className='flexChild'>
                <p>
                    {locationEdu}
                </p>
                <div>
                    <p>{startEdu} {typeof startEdu == 'string' && startEdu != "" ? "-":null} {endEdu}</p>
                </div>
            </div>
        </div>
    
  )
}
