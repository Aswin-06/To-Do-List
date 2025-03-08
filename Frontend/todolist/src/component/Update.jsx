import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Update.module.css"

function Update()
{

    const {id}=useParams();
    const [list,alterList]=useState({id:"",item:""});
    const navigate=useNavigate();

    useEffect(()=>
    {
        const fetch=async (e) => {
            try {
                const value=await axios.get(`http://localhost:8080/api/item/${id}`);
                alterList(value.data);
                console.log("update value got successful");
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    },[])

    function updatelist(e)
    {
        const {name,value}=e.target;
        alterList({...list,[name]:value});
    }

    function updateChange(e)
    {
        e.preventDefault();
        const data=new FormData();
        data.append("value",new Blob([JSON.stringify(list)],{type:"application/json"}));
        axios.put("http://localhost:8080/api/item",data)
        .then(()=>
        {
            console.log("updated successful");
            navigate("/")
        })
        .catch((error)=>
        {
            console.log(error);
        })
    }

    function del(e)
    {
        e.preventDefault();
        navigate("/");
    }

    return(
        <div className={style.div}>
            <input type="text" value={list.item} className={style.input} placeholder="Enter the change" name="item" onChange={updatelist} />
            <button onClick={updateChange} className={style.update}>Update</button>
            <button onClick={del} className={style.cancel}>Cancel</button>
        </div>
    )
}

export default Update;