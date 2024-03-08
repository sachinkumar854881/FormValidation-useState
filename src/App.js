import React from 'react';
import {useState} from 'react';

function App(){

    const [name,setName] = useState("sachin")
    const [age,setAge] = useState("")

    function collectName(event){
        setName(event.target.value)
    }
    function collectAge(event){
        setAge(event.target.value)
    }

    function validateData(event){
        event.preventDefault();
        if(!name)
        {
            console.log("please enter name!!!")
        }
        if(!age)
        {
            console.log("please enter age!!!")
        }
    }

    return(
        <div>
            <center>
                <form method="POST" onSubmit={validateData}>
                    <h2>Contact form</h2>
        
                    <label>Name:</label>
                    <input type="text" value={name} onChange={collectName}/><br/><br/>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={collectAge}/><br/><br/>
                    <button>Submit</button>
                </form>
            </center>
        </div>
    )
}
export default App;