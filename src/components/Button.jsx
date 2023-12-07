import '../styles/button.css'

export default function Button({text, click, classID}) {


  return (
    <>
        <button type='reset' onClick={click} className={classID}>
            {text}
        </button>
    </>
    
  )
}
