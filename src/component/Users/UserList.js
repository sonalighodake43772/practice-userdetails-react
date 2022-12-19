import React from 'react';
import  './UserList.css';

const UserList = props => {
  return (
    <ul className='users'>
     
      {props.items.map(list => (
        <li  key={list.id}>
         
          Name-{list.name}:Age-{list.age}
        </li>
      ))}

</ul>
   
  );
};

export default UserList;
