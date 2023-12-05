import '../styles/InputLabel.css'
import { useState } from 'react'

let initialValues = {
    firstLast: " "
  }


export default function InputLabel({label, type='text', onChange, value, propKey}) {

    const [data, setData] = useState(initialValues)
  
    const handleChange = (event) => {
      setData({...data, firstLast: event.target.value})
    }

    console.log(data[propKey])
    return (
      <label>
        {label}
        <input
          value={data[propKey] || ""}
          type = {type}
          onChange={handleChange}
          className='inputLabel'
        />
      </label>
    );
}
