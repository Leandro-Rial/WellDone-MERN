import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = (props) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const products = {
            title,
            description,
            authorName
        }

        setTitle('')
        setDescription('')
        setAuthorName('')

        await axios.put(`http://localhost:5000/api/products/edit/${props.match.params.id}`, products)
                .then(res => console.log(res.data))
                .catch(err => {
                    console.log(err)
                })

        window.location.href = '/'
    }

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/products/${props.match.params.id}`)
          .then((res) => [
            setTitle(res.data.title),
            setDescription(res.data.description),
            setAuthorName(res.data.authorName),
          ])
          .catch((err) => console.log(err));
      }, []);

    return (
        <div className="container">

            <h1 className="mb-5">Edit Product</h1>

            <div className="form-group">
                <label htmlFor="authorName">Author</label>
                <input type="text" className="form-control" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
            </div>
            
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <form onSubmit={onSubmit}>

                <button type="submit" className="btn btn-success btn-block">Edit</button>

            </form>
        </div>
    )
}

export default UpdateProduct
