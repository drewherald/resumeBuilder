import '../styles/resume.css'

export default function ExpSection({company, position, startExp, endExp, locationExp, description}) {
  return (
    <div className='eduText'>
      <div className='flexChild'>
                <p><b>{company}</b></p>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        <div className='flexChild'>
            <p>{locationExp}</p>
            <p>{startExp} {typeof startEdu == 'string' && startExp != "" ? "-":null} {endExp}</p>
            <p></p>
        </div>
    </div>
  )
}
