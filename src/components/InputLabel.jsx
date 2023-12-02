import { useState } from 'react';
import '../styles/InputLabel.css'


export default function InputLabel({label, type='text'}) {
    const [text, setText] = useState('');
  
    function handleChange(e) {
      setText(e.target.value);
    }

  
    return (
      <label>
        {label}
        {' '}
        <input
          value={text}
          type = {type}
          onChange={handleChange}
          className='inputLabel'
        />
      </label>
    );
}
