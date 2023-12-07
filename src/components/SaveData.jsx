
export default function SaveData({name, click, bool}) {

    let className = 'saveSect'

    
    if(!bool){
        className='none'
    }

  return (
    <section className={className}>
        <p>{name}</p>
        <button className='delete' onClick={click}>Delete</button>
    </section>
  )
}
