import React ,{useState} from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Title from './components/Title'
import HomePage from './components/HomePage'
import AddRoom from './components/AddRoom'
import Room from './components/Room'

function App() {
  
  const [roomList,setRoomList] = useState([]);
  
  const addToRoomsList = (room,name,color)=>{
    setRoomList([...roomList,{room:room,name:name,color:color,path:'/room/'+name,devices:[]}]);
  }
  const addDevice=(deviceToAdd,i)=>{
    roomList[i].devices = [...roomList[i].devices,{device:deviceToAdd,active:false}];
    setRoomList([...roomList]);
  }
  const onOff = (roomIndex,deviceIndex)=>{
    roomList[roomIndex].devices[deviceIndex].active = !roomList[roomIndex].devices[deviceIndex].active;
    setRoomList([...roomList]);
  }


  return (
    <div className="App">
      {/* <Title/> */}
      <Router>
      <Title/>
        <Switch>
          <Route exact path='/' component={()=>{return <HomePage roomList={roomList}/>}} />
          <Route exact path='/addroom' component={()=>{return <AddRoom list={roomList} addToRoomsList={addToRoomsList}/>}} />
          {roomList.map((element,i)=>{
            return (<Route exact path={element.path} component={()=>{return <Room onOff={onOff} index={i} addDevice={addDevice} roomVal={element}/>}}/>)
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
