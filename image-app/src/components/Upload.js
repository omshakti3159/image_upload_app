import React, { useState } from 'react'
import axios from 'axios'

const API_URL='http://localhost:3159/upload'
const Upload = ({click}) => {
    //states for form data and error message
    const [image,setimage]=useState('')
    const [filename,setfilename]=useState('Upload File')
    const [title,settitle]=useState('')
    const [description,setdescription]=useState('')
    const [error,seterror]=useState('')

    //save button click handling function
    const handleSubmit=()=>{
        if(image&&filename&&title){
            const fileData= new FormData()
            fileData.append('image',image)
            fileData.append("title",title)
            fileData.append('description',description)
            axios.post(API_URL,fileData)
            setimage('')
            setfilename('Upload File')
            settitle('')
            setdescription('')
            seterror('')
            click()
        }
        else{
            seterror("please fill all the feilds")
        }
    }
//style for this component container
    const style={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'left',
        padding:'40px',
        boxSizing:'border-box',
        flexDirection:'column',
        backgroundColor:'pink',
        margin:'20px auto',
        height:'40%'
    }

    return (
        <div style={style} className='col-md-6'>
                <button className='btn btn-primary mb-4 col-md-6 mx-auto' disabled>Image Upload App</button>
                <p style={{textAlign:'center',color:'red'}}>{error}</p>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={e=>{
                        setimage(e.target.files[0])
                        setfilename(e.target.files[0].name)}
                        }/>
                    <label className="custom-file-label" forhtml="customFile">{filename}</label>
                </div>
                <div className='form-group'>
                    <label forhtml ="exampleFormControlInput1">Title</label>
                    <input type="email" className="form-control" value={title} onChange={e=>settitle(e.target.value)} placeholder="Image Title"/>
                </div>
                <div className="form-group">
                    <label forhtml="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" rows="2" value={description} onChange={e=>setdescription(e.target.value)}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleSubmit}>Save Data</button>

        </div>
    )
}

export default Upload
