import React, { useState,useRef } from "react";
import Error from "../UI/Error";

import Button from "../UI/Button";
import   './UserInput.css';

const UserInput=(props)=>
{
   const nameInputRef = useRef();
   const ageInputRef = useRef();
   const collegeInputRef = useRef();
    // const[enterdName,setEnteredName]=useState('');
    // const[enterdAge,setEnteredAge]=useState('');
     const [error, setError] = useState();
    // const setName = event => {
       
    //     setEnteredName(event.target.value);
    //   };
    //   const setAge = event => {
       
    //     setEnteredAge(event.target.value);
    //   };
    

    const formSubmitHandler = event => {

        event.preventDefault();
        const enteredUserName= nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredUserCollege=collegeInputRef.current.value;
       
       
        if(enteredUserName.trim().length===0 && enteredUserAge.trim().length===0 && enteredUserCollege.trim().length===0)
        {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
        return;
         
        }
        if(enteredUserAge<1)
        {
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
          return;
        }
        props.onaddinput(enteredUserName,enteredUserAge,enteredUserCollege);
        // setEnteredName('');
        // setEnteredAge('');
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';

        
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
            // value={enterdName}
            // onChange={setName}
            ref={nameInputRef}
        
          />
        <br/>    <br/>
        
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enterdAge}
            // onChange={setAge}
            ref={ageInputRef}
            
            />
               <br/>   <br/>  
               <label htmlFor="collegename">CollegeName</label>
          <input
            id="collegename"
            type="text"
            // value={enterdName}
            // onChange={setName}
            ref={collegeInputRef}
        
          />
          <br/>   <br/>  
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
    )

}
export default UserInput;