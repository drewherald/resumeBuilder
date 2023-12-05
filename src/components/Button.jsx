import '../styles/button.css'

export default function Button({text, click}) {


  return (
    <>
        <button type='reset' onClick={click}>
            {text}
        </button>
    </>
    
  )
}
