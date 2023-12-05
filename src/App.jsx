import Card from "./components/Card"
import InputLabel from "./components/InputLabel"
import Resume from "./components/resume";
import { v4 as uuidv4 } from 'uuid';
import './styles/app.css'
import { useState } from "react";

let initialValues = {
  firstLast: " "
}

function App() {

  const [data, setData] = useState(initialValues)
  
  const nameChange = (event) => {
    setData({...data, firstLast: event.target.value})
  }

  let infoList = [<InputLabel label='First & Last Name' key = {'firstLast'} onChange={nameChange} value={data["firstLast"]} propKey = "firstLast"/>, <InputLabel label='Email' type='email' key = {uuidv4()}/>,
              <InputLabel label='Phone Number' type='tel' key={uuidv4()} />, <InputLabel label='Address' key={uuidv4()} />]
  const eduList = [<InputLabel label='School' key = {uuidv4()}/>, <InputLabel label='Degree' key = {uuidv4()}/>,
              <InputLabel label='Start Date' key={uuidv4()} />, <InputLabel label='End Date' key={uuidv4()} />,
              <InputLabel label='Location' key = {uuidv4()}/>]
  const expList = [<InputLabel label='Company' key = {uuidv4()}/>, <InputLabel label='Position' key = {uuidv4()}/>,
              <InputLabel label='Start Date' key={uuidv4()} />, <InputLabel label='End Date' key={uuidv4()} />,
              <InputLabel label='Location' key = {uuidv4()}/>, <InputLabel label='Description' key = {uuidv4()}/>]
              

  return (
    <div className="flexContainer">
      <div>
        <Card title='Personal Information' list={infoList} />
        <Card title='Education' list={eduList}/> 
        <Card title= 'Work Experience' list={expList} />
      </div>
      <div>
        <Resume information = {data}/>
      </div>
    </div>
  )
}

export default App
