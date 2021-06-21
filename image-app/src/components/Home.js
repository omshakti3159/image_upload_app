import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Upload from './Upload'
import axios from 'axios'
const API_URL='http://localhost:3159/'
const Home = () => {
    const [data,setdata]=useState('')
    useEffect(() => {
        axios.get(API_URL)
        .then((res)=>{
            setdata(res.data)
        })
    }, [data])
    const handleData=()=>{
        axios.get(API_URL)
        .then((res)=>{
            setdata(res.data)
        })
    }
    return (
        <div>
           <Upload click={()=>handleData()}/> 
           <Carousel click={()=>handleData()} data={data}/>
        </div>
    )
}

export default Home
