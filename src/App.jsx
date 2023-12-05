import Card from "./components/Card"
import InputLabel from "./components/InputLabel"
import Resume from "./components/resume";
import Button from "./components/button"
import { v4 as uuidv4 } from 'uuid';
import './styles/app.css'
import { useState } from "react";

let initialValues = {
  firstLast: "",
  email: "",
  tel: "",
  address: "",
  school: "",
  degree: "",
  startEdu: "",
  endEdu: "",
  locationEdu: ""
}

function App() {

  const [data, setData] = useState(initialValues)
  
  const nameChange = (event) => {
    setData({...data, firstLast: event.target.value})
  }

  const emailChange = (event) => {
    setData({...data, email: event.target.value})
  }
  
  const telChange = (event) => {
    setData({...data, tel: event.target.value})
  }

  const addressChange = (event) => {
    setData({...data, address: event.target.value})
  } 

  const schoolChange = (event) => {
    setData({...data, school: event.target.value})
  } 

  const degreeChange = (event) => {
    setData({...data, degree: event.target.value})
  } 

  const startEduChange = (event) => {
    setData({...data, startEdu: event.target.value})
  } 

  const endEduChange = (event) => {
    setData({...data, endEdu: event.target.value})
  } 

  const locationEduChange = (event) => {
    setData({...data, locationEdu: event.target.value})
  } 


  let infoList = [<InputLabel label='First & Last Name' key = {'firstLast'} onChange={nameChange} propKey={'firstLast'} value={data["firstLast"]} />, 
                  <InputLabel label='Email' type='email' key = {'email'} onChange={emailChange} propKey={'email'} value={data["email"]} />,
                  <InputLabel label='Phone Number' type='tel' key={'tel'} onChange={telChange} propKey="tel" value={data['tel']}  />, 
                  <InputLabel label="Address" key={'address'} onChange={addressChange} propKey={'address'} value={data["address"]}  />]
  const eduList = [ <InputLabel label='School' key = {'school'} onChange={schoolChange} propKey={'school'} value={data['school']} />, 
                    <InputLabel label='Degree' key = {'degree'} onChange={degreeChange} propKey={'degree'} value={data['degree']}/>,
                    <InputLabel label='Start Date' key={'startEdu'} onChange={startEduChange} propKey={'startEdu'} value={data['startEdu']} />, 
                    <InputLabel label='End Date' key={'endEdu'} onChange={endEduChange} propKey={'endEdu'} value={data['endEdu']} />,
                    <InputLabel label='Location' key = {'locationEdu'} onChange={locationEduChange} propKey={'locationEdu'} value={data['locationEdu']} />]
  const expList = [<InputLabel label='Company' key = {uuidv4()}/>, <InputLabel label='Position' key = {uuidv4()}/>,
              <InputLabel label='Start Date' key={uuidv4()} />, <InputLabel label='End Date' key={uuidv4()} />,
              <InputLabel label='Location' key = {uuidv4()}/>, <InputLabel label='Description' key = {uuidv4()}/>]
              

  return (
    <div className="flexContainer">
      <div>
        <Card title='Personal Information' list={infoList}/>
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
