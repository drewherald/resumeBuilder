import '../styles/card.css'

export default function Card({title, list}) {
  return (
    <div className='cardBox'>
        <div>
        <h2>{title}</h2>
        <form>
            {list}
        </form>
        </div>
    </div>
  )
}
