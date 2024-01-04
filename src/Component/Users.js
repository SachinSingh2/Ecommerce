import React, { useEffect, useState } from 'react'

export default function Users() {

    const [info , setInfo ] = useState()

    const getUsers = async()=>{
        const res = await fetch("http://127.0.0.1:8000/AllUsers",{
            method:"GET"
        })
        const data = await res.json()
        setInfo(data.data)
        console.log(data.data)
    }

    useEffect(()=>{
        getUsers()
    },[])

  return (
    <>
     <h1 style={{textAlign:"center"}} >Users</h1> 
     {info && info.length > 0 ? info.map((data)=>{
        return <div style={{width:"20%"}} className='border border-dark mx-2 p-2' key={data._id}>
            <p>Name : {data.name}</p>
            <p> Email : {data.email}</p>
            <p> Contact : {data.contact}</p>
        </div>
     }) : null}
    </>
  )
}
