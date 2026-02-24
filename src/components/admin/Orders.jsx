import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Orders() {

    const [data, setData] = useState([]);

    function loadData() {
        axios.get("https://695b986a1d8041d5eeb77c41.mockapi.io/orders")

            .then((res) => {
                console.log(res.data);  // [{},{}]
                setData(res.data);
            });
    };
    useEffect(() => {
        loadData();
    }, []);


   

    return (
        <>
            {/* <h1 className='text-center'>All Products</h1> */}
            {
                data.length >= 1
                    ?
                    <div className="container">
                        <div className="col-lg-12">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">firstName</th>
                                        <th scope="col">lastName</th>
                                        <th scope="col">address</th>
                                        <th scope="col">city</th>
                                        <th scope="col">state</th>
                                        <th scope="col">email</th>
                                        <th scope="col">phone</th>
                                        {/* <th scope="col">description</th> */}
                                        {/* <th scope="col">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((edata, i) => {
                                            // console.log(eachData);
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{edata.firstName}</td>
                                                    <td>{edata.lastName}</td>
                                                    <td>{edata.address}</td>
                                                    <td>{edata.city}</td>
                                                    <td>{edata.state}</td>
                                                    <td>{edata.email}</td>
                                                    <td>{edata.phone}</td>

                                                   
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </>
    )
}

export default Orders