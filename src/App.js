import { CreateUser } from './components/createUser';
import { Users } from './components/users';
 import React from "react";

function App() {

  const [cUser, setCUser] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  const createdarkMode = (e) =>{
   console.log(e?.target)
    setDarkMode(()=>!darkMode)
  }
  const createUsers = (e) =>{
    e?.preventDefault();

    const first_name =  e?.target?.email?.value?.trim();
    const last_name = e?.target?.first_name?.value?.trim();
    const email = e?.target?.last_name?.value?.trim();

    if(!first_name || !last_name || !email) return;
    else{

      const data  = {
        first_name,
        last_name,
        email
      }

    fetch('https://reqres.in/api/users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setCUser(!cUser)
        setRefetch(!refetch)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    

    }
     
  
    
  }

  

  return (
    <div>
    <div    style={ darkMode ? {backgroundColor:"white", color:"black"} : {backgroundColor:"black", color:"white"}}>
      <button id="darkMode"  onClick={createdarkMode} >{`${darkMode ? "Enable DarkMode" :"Disable DarkMode"} `}</button>
      {cUser ? <CreateUser   setcUser={createUsers} setRefetch={setRefetch} /> : <button onClick={()=>setCUser(!cUser)}>Create</button>}
      <Users  style={{textAlign:"center"}} refetch={refetch} />
    </div>
    </div>

  );
 
}

export default App;
