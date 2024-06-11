import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const [data,setData] = useState(
        {
            "title":"",
            "description":"",
            "date":"",
            "duration":"",
            "venue":"",
            "trainername":""
        }
    )
    const  inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readvalue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">

                    <label htmlFor="" className="form-label">COURSE TITLE</label>
                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>

                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">

                    <label htmlFor="" className="form-label">COURSE DESCRIPTION</label>
                    <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>

                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">
                    <label htmlFor="" className="form-label">COURSE DATE</label>
                    <input type="date" name="date" value={data.date} onChange={inputHandler} id="" className="form-control" />

                
                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">

                    <label htmlFor="" className="form-label">DURATION</label>
                    <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>

                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">

                    <label htmlFor="" className="form-label">VENUE</label>
                    <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>

                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">
                    <label htmlFor="" className="form-label">TRAINER NAME</label>
                    <input type="text" className="form-control" name="trainername" value={data.trainername} onChange={inputHandler}/>

                    </div>
                    <div className=" col col-12 col-sm-6 col-md-6 col-lg-6 col-xl col-xxl-6">
                    <button className="btn btn-success" onClick={readvalue}>REGISTER</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddCourse