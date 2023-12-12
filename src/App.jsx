import Card from "./components/Card"
import InputLabel from "./components/InputLabel"
import Resume from "./components/Resume";
import Button from "./components/Button"
import { v4 as uuidv4 } from 'uuid';
import './styles/app.css'
import { useState } from "react";
import EduSection from "./components/EduSection";
import ExpSection from "./components/ExpSection";
import SaveData from "./components/SaveData";

let initialValues = {
  firstLast: "",
  email: "",
  tel: "",
  address: "",
  school: "",
  degree: null,
  startEdu: null,
  endEdu: null,
  locationEdu: null,
  company: "",
  position: null,
  startExp: null,
  endExp: null,
  locationExp: null,
  description: null
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

  const companyChange = (event) => {
    setData({...data, company: event.target.value})
  } 

  const positionChange = (event) => {
    setData({...data, position: event.target.value})
  } 

  const startExpChange = (event) => {
    setData({...data, startExp: event.target.value})
  } 

  const endExpChange = (event) => {
    setData({...data, endExp: event.target.value})
  } 

  const locationExpChange = (event) => {
    setData({...data, locationExp: event.target.value})
  } 

  const descriptionChange = (event) => {
    setData({...data, description: event.target.value})
  } 



  const [education, setEdu] = useState([])
  const [educationData, setEduData] = useState([])

  const clickSave = (count) => {
    return function(){
      let phold = education
      phold.splice(count, 1, "")
      setEdu(phold)
      let phold2 = educationData
      phold2[count][2] = false
      setEduData(phold2)
      setData({firstLast: data.firstLast})
    }
  }


  const eduClickFunction = () => {
    let test = {...data}
    if(test.school == null || test.locationEdu == null || test.degree == null || test.startEdu == null) return 
    let placeHolder = <EduSection school={test.school} locationEdu={data.locationEdu} degree={data.degree} startEdu={data.startEdu} endEdu={data.endEdu} key={uuidv4()} />
    let newArray = education
    let count = education.length
    newArray.push(placeHolder)
    setEdu(newArray)
    let saveItem = [test.school, clickSave(count), true]
    let newSave = educationData
    newSave.push(saveItem)
    setEduData(newSave)
    setData({school: null, locationEdu: null, degree: null, startEdu: null, endEdu: null, firstLast: data.firstLast, email: data.email, tel:data.tel, address:data.address})
}
  const eduButton = <Button text='Save' click ={eduClickFunction} classID={'save'}/>

  const [experience, setExp] = useState([])
  const [experienceData, setExpData] = useState([])

  const clickSaveExp = (count) => {
    return function(){
      let phold = experience
      phold.splice(count, 1, "")
      setExp(phold)
      let phold2 = experienceData
      phold2[count][2] = false
      setExpData(phold2)
      setData({firstLast: data.firstLast})
    }
  }

  const expClickFunction = () => {
    let test = {...data}
    if(test.company == null || test.locationExp == null || test.position == null || test.startExp == null) return 
    let placeHolder = <ExpSection company={test.company} locationExp={data.locationExp} position={data.position} startExp={data.startExp} endExp={data.endExp} description={data.description} key={uuidv4()} />
    let newArray = experience
    let count = experience.length
    newArray.push(placeHolder)
    setExp(newArray)
    
    let saveItem = [test.company, clickSaveExp(count), true]
    let newSave = experienceData
    newSave.push(saveItem)
    setExpData(newSave)

    setData({position: null, locationExp: null, company: null, startExp: null, endExp: null, description: null, firstLast: data.firstLast, email: data.email, tel:data.tel, address:data.address})
}
  const expButton = <Button text='Save' click ={expClickFunction} classID={'save'}/>


  let infoList = [<InputLabel label='First & Last Name' key = {'firstLast'} onChange={nameChange} propKey={'firstLast'} value={data["firstLast"]} />, 
                  <InputLabel label='Email' type='email' key = {'email'} onChange={emailChange} propKey={'email'} value={data["email"]} />,
                  <InputLabel label='Phone Number' type='tel' key={'tel'} onChange={telChange} propKey="tel" value={data['tel']}  />, 
                  <InputLabel label="Address" key={'address'} onChange={addressChange} propKey={'address'} value={data["address"]}  />]
  const eduList = [ <InputLabel label='School' key = {'school'} onChange={schoolChange} propKey={'school'} value={data['school']} />, 
                    <InputLabel label='Degree' key = {'degree'} onChange={degreeChange} propKey={'degree'} value={data['degree']}/>,
                    <InputLabel label='Start Date' key={'startEdu'} onChange={startEduChange} propKey={'startEdu'} value={data['startEdu']} />, 
                    <InputLabel label='End Date' key={'endEdu'} onChange={endEduChange} propKey={'endEdu'} value={data['endEdu']} />,
                    <InputLabel label='Location' key = {'locationEdu'} onChange={locationEduChange} propKey={'locationEdu'} value={data['locationEdu']} />]
  const expList = [<InputLabel label='Company' key = {'company'} onChange={companyChange} propKey={'company'} value={data['company']}/>, 
                   <InputLabel label='Position' key = {'position'} onChange={positionChange} propKey={'position'} value={data['position']}/>,
                   <InputLabel label='Start Date' key={'startExp'} onChange={startExpChange} propKey={'startExp'} value={data['startExp']} />, 
                   <InputLabel label='End Date' key={'endExp'} onChange={endExpChange} propKey={'endExp'} value={data['endExp']} />,
                   <InputLabel label='Location' key = {'locationExp'} onChange={locationExpChange} propKey={'locationExp'} value={data['locationExp']}/>, 
                   <InputLabel label='Description' key = {'description'} onChange={descriptionChange} propKey={'description'} value={data['description']}/>]
              

  return (
    <div className="flexContainer">
      <div>
        <Card title='Personal Information' list={infoList} />
        <Card title='Education' list={eduList} button={eduButton} save={educationData}/> 
        <Card title= 'Work Experience' list={expList} button={expButton} save={experienceData}/>
      
      </div>
      <div>
        <Resume information = {data} save = {education} saveTwo = {experience} />
      </div>
    </div>
  )
}

export default App
