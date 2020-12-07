import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lists = ({products}) => {

    const [product, setProduct] = useState([])

    const btnDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`)
            setProduct(product.filter(e => e._id !== id))

        window.location.href = '/'
    }

    return (
        <div className="row">
            { !products.length ? 
                <div>
                    <h1>Loading...</h1>
                </div> :
                products.map((product) => (
                    <div className="col-md-4" key={product._id}>
                        <div className="card mt-4">
                            <div className="card-body">
                                <Link to={'/details/' + product._id}>
                                    <h1>{product.title}</h1>
                                </Link>
                                <hr/>
                                <p>{product.description}</p>
                                <h6>{product.authorName}</h6>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <Link className="btn btn-warning" to={'/edit/' + product._id}>
                                        Edit
                                    </Link>

                                    <button className="btn btn-danger" onClick={() => btnDelete(product._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Lists
