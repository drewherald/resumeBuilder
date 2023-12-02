import Card from "./components/Card"
import InputLabel from "./components/InputLabel"
import { v4 as uuidv4 } from 'uuid';

function App() {

  const infoList = [<InputLabel label='First & Last Name' key = {uuidv4()}/>, <InputLabel label='Email' type='email' key = {uuidv4()}/>,
              <InputLabel label='Phone Number' type='tel' key={uuidv4()} />, <InputLabel label='Address' key={uuidv4()} />]
  const eduList = [<InputLabel label='School' key = {uuidv4()}/>, <InputLabel label='Degree' key = {uuidv4()}/>,
              <InputLabel label='Start Date' key={uuidv4()} />, <InputLabel label='End Date' key={uuidv4()} />,
              <InputLabel label='Location' key = {uuidv4()}/>]
  const expList = [<InputLabel label='Company' key = {uuidv4()}/>, <InputLabel label='Position' key = {uuidv4()}/>,
              <InputLabel label='Start Date' key={uuidv4()} />, <InputLabel label='End Date' key={uuidv4()} />,
              <InputLabel label='Location' key = {uuidv4()}/>, <InputLabel label='Description' key = {uuidv4()}/>]
              

  return (
    <>
      <Card title='Personal Information' list={infoList} />
      <Card title='Education' list={eduList}/> 
      <Card title= 'Work Experience' list={expList} />
      {
      /* 
      <resume />
      */}
    </>
  )
}

export default App
