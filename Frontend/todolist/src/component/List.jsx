import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./List.module.css"

function List()
{

    const [datum,alterDatum]=useState([]);
    const navigate=useNavigate();
    

    useEffect(()=>
        {
            const fetch=async () => {
                try {
                    
                    const data=await axios.get("http://localhost:8080/api/item");
                    alterDatum(data.data);
                    console.log("fetch successful");
                } catch (error) {
                    console.log(error);
                }
            }
            fetch();
        },[])

    function delitem(newid,e)
    {
        e.preventDefault();
        axios.delete(`http://localhost:8080/api/delitem/${newid}`)
        .then((res)=>
        {
            console.log("delete successful");
            navigate(0);
        })
        .catch((error)=>
        {
            console.log(error);
        })
    }

    const updateItem=(newid,e)=>
    {
        e.preventDefault();
        navigate(`/update/${newid}`);
    }

    function changeorder(newid,e)
    {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/changeorder/${newid}`)
        .then((res)=>
        {
            console.log("order change completed");
            navigate(0);
        })
        .catch((error)=>
        {
            console.log(error);
        })

    }


    const tags=datum.map(data=> <div key={data.id} className={style.item}>
        
        <input className={style.in} type="checkbox"/>
        <span className={style.name}>{data.item}</span>
        <button className={style.up} onClick={(e)=>changeorder(data.id,e)}>Up</button>
        <button className={style.update} onClick={(e)=>updateItem(data.id,e)}>Update</button>
        <button className={style.del} onClick={(e)=>delitem(data.id,e)}>delete</button>
    </div>);

    return(
        <div  className={style.list} >
            {tags}
        </div>
    );
}

export default List;