import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState(
        {
            "title": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]:event.target.value })

    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch().finally()

    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">COURSE TITLE</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readvalue}>SEARCH</button>

                            </div>

                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br/>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">COURSE TITLE</th>
                                            <th scope="col">COURSE DESCRIPTION</th>
                                            <th scope="col">COURSE DATE</th>
                                            <th scope="col">DURATION</th>
                                            <th scope="col">VENUE</th>
                                            <th scope="col">TRAINER NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {result.map(
                                    (value, index)=>{
                                        return  <tr>
                                        <th scope="row">{value.title}</th>
                                        <td>{value.description}</td>
                                        <td>{value.date}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.venue}</td>
                                        <td>{value.trainername}</td>
                                    </tr>
                                    }
                                   )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search