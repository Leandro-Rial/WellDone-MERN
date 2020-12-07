import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setDescription(res.data.description),
        setAuthorName(res.data.authorName),
      ])
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <div>
      {!title || !description || !authorName ? (
        <h1>Loading</h1>
      ) : (
        <div className="col-md-12">
          <div className="card mt-4">
            <div className="card-body">
              <h1>{title}</h1>
              <hr />
              <p>{description}</p>
              <h6>{authorName}</h6>
            </div>
            <div className="card-footer">
              <Link className="btn btn-info btn-block" to={"/"}>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
