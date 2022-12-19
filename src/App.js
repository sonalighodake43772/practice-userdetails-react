import React,{useState} from "react";
import './App.css';
import UserList from "./component/Users/UserList";
import UserInput from "./component/Users/UserInput";
const App=()=>
{
  
  const [userList,setUserList] = useState([]);

  const addinputHandler = (uName,uAge) => {
    setUserList((prevUserInput) => {
      return [...prevUserInput,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  } 
return(
  <div id="user-form">

<UserInput onaddinput={addinputHandler}/>
<UserList items={userList}/>
</div>
)

}
export default App;