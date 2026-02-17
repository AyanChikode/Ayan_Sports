import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {

    const [data, setData] = useState([]);

    function loadData() {
        axios.get("http://localhost:8080/products/list")

            .then((res) => {
                console.log(res.data);  // [{},{}]
                setData(res.data);
            });
    };
    useEffect(() => {
        loadData();
    }, []);


    function handleDelete(id) {
        console.log(id)
        axios.delete("http://localhost:8080/products/delete/"+ id)
            .then((res) => {
                console.log(res.data);
                loadData();
            });

    };

   
    return (
        <>
            <h1 className='text-center'>All Products</h1>
            {
                data.length >= 1
                    ?
                    <div className="container">
                        <div className="col-lg-12">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">title</th>
                                        <th scope="col">age</th>
                                        <th scope="col">price</th>
                                        <th scope="col">mrp</th>
                                        <th scope="col">image</th>
                                        <th scope="col">brand</th>
                                        <th scope="col">category</th>
                                        {/* <th scope="col">description</th> */}
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((edata, i) => {
                                            // console.log(eachData);
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>
                                                        <img style={{ width: "100px", height:"100px"}} src={edata.path} alt="" />
                                                    </td>
                                                    <td>{edata.title}</td>
                                                    <td>{edata.age}</td>
                                                    <td>{edata.price}</td>
                                                    <td>{edata.mrp}</td>
                                                    <td>{edata.brand}</td>
                                                    <td>{edata.category}</td>
                                                    {/* <td>{edata.description}</td> */}

                                                    <td>
                                                        <Link to={"/admin/addproduct/" + edata.id} >
                                                            <button className='btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold shadow-sm'><i class="fa-solid fa-pencil"></i></button>
                                                        </Link>
                                                        <button onClick={() => handleDelete(edata.id)} className='btn btn-outline-danger rounded-pill px-4 py-2 fw-semibold shadow-sm'><i class="fa-solid fa-trash"></i></button>
                                                    </td>
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

export default Products