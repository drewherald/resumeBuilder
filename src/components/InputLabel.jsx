import '../styles/InputLabel.css'
import { useState } from 'react'

let initialValues = {
    firstLast: " "
  }


export default function InputLabel({label, type='text', onChange, value}) {

    const [data, setData] = useState(initialValues)
  
    const handleChange = (event) => {
      setData({...data, firstLast: event.target.value})
    }

    console.log({value})
    return (
      <label>
        {label}
        {' '}
        <input type="text" onChange={handleChange} value={data.firstLast || ""}/>
        {console.log(data)}
        <input
          value={value}
          type = {type}
          onChange={onChange}
          className='inputLabel'
        />
      </label>
    );
}
