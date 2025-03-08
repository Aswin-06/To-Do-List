import { useEffect, useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import style from "./Home.module.css"

function Home()
{
    const [list,alterlist]=useState({item:""});
    const navigate=useNavigate();

    function alterChange(e)
    {
        const {name,value}=e.target;
        alterlist({...list,[name]:value})
    }

    function additem(e)
    {
        e.preventDefault();
        const data=new FormData();
        data.append("value",new Blob([JSON.stringify(list)],{type:"application/json"}));
        axios.post("http://localhost:8080/api/item",data)
        .then((res)=>
        {
            console.log("successful");
            navigate(0)
        })
        .catch((error)=>
        {
            console.log(error);
        })
    }

    return(
        
        <div>
            <h1 className={style.heading}>To-Do-List</h1>
            <div className={style.cont}>
            <input type="text" name="item" placeholder="Add a task" onChange={alterChange} className={style.input}/>
            <button onClick={additem} className={style.button}>Add</button>
        </div>
        </div>
    )
}

export default Home