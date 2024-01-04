import React, { useState } from 'react'
import '../../css/SearchBar.css'
import SearchProduct from '../../Component/NavRelated/SearchProduct'

export default function SearchBar() {

    const [serchValue , setSearchValue] = useState()
    const [result , setResult] = useState([])


    const fetchData = async (value)=>{
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let res = await data.json()
        let info = await res.filter((data)=>{
            return value && data && data.name  && data.name.toLowerCase().includes(value)
        })
        console.log(info)
        setResult(info)
    }

    const handleChange = (e)=>{
        setSearchValue(e.target.value)
        fetchData(e.target.value)
    }

  return (
    <>
    <div style={{display:"flex"}} > <input onChange={handleChange} className='SearchItemInput' style={{width:"100%"}} placeholder='Search For items ' type="text" /><span className='SearchBar' ><i type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" className=" fa-xl fa-solid fa-multiply" style={{color: "gray"}}></i></span> </div>


    
    { result == 0 ? <h1 className='my-5' style={{textAlign:"center"}} >No Result</h1> : result.map((data,index)=>{
        return <div key={index} className='container' >
            <SearchProduct data={data} />
        </div>
    })}


    
    </>
  )
}
