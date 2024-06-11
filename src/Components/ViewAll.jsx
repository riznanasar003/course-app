import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState([])
    const fetchData = () =>{
        axios.get("http://localhost:8080/viewall").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                        {data.map(
                                            (value, index)=>{
                                                return <tr>
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

        </div>
    )
}

export default ViewAll