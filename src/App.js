import React,{useState} from "react";
import './App.css';
import UserList from "./component/Users/UserList";
import UserInput from "./component/Users/UserInput";
const App=()=>
{
  
  const [userList,setUserList] = useState([]);

  const addinputHandler = (uName,uAge,uCollege) => {
    setUserList((prevUserInput) => {
      return [...prevUserInput,{name:uName,age:uAge,collegename:uCollege,id:Math.random().toString()}];
    })
  } 
return(
  <React.Fragment>
    <div id="user-form">
    <UserInput onaddinput={addinputHandler}/>
<UserList items={userList}/>
    </div>


</React.Fragment>
)

}
export default App;