import '../styles/resume.css'

export default function resume({information}) {

    let firstLast = information.firstLast

  return (
    <div className='container'>
      <section className='header'>
        <h1>Drew Herald</h1>
        <p>drewherald9@gmail.com || 859-317-1475 || 1417 Glenview Dr, Lexington KY 40514</p>
      </section>
    </div>
  )
}
