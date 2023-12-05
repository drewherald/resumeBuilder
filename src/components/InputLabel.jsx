import '../styles/InputLabel.css'

export default function InputLabel({label, type='text', onChange, value, propKey}) {

    //console.log(data[propKey])
    return (
      <label>
        {label}
        <input
          defaultValue={value || ""}
          type = {type}
          onChange={onChange}
          className='inputLabel'
          key={propKey}
        />
      </label>
    );
}
