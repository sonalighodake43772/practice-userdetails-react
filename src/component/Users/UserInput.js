import React, { useState } from "react";
import Error from "../UI/Error";

import Button from "../UI/Button";
import   './UserInput.css';

const UserInput=(props)=>
{
    const[enterdName,setEnteredName]=useState('');
    const[enterdAge,setEnteredAge]=useState('');
    const [error, setError] = useState();
    const setName = event => {
       
        setEnteredName(event.target.value);
      };
      const setAge = event => {
       
        setEnteredAge(event.target.value);
      };
    

    const formSubmitHandler = event => {
        event.preventDefault();
       
        if(enterdName.trim().length===0 && enterdAge.trim().length===0)
        {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
        return;
         
        }
        if(enterdAge<1)
        {
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
          return;
        }
        props.onaddinput(enterdName,enterdAge);
        setEnteredName('');
        setEnteredAge('');

        
      };
      const errorHandler = () => {
        setError(null);
      };
    return(
      <div>
     {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
 <div className='form'>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterdName}
            onChange={setName}
        
          />
        <br/>    <br/>
        
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={setAge}
          />
               <br/>   <br/>  
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
    )

}
export default UserInput;