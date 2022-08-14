import { React, useState } from "react";

import "./variant.css";

const Variant = () => {
  const [any, setany] = useState();
  return (
    <>
  s    <div className="variant-page">
        <div className="text-center text-dark">
          <form className="variant-form mt-5">
            <div className="form-group">
              <label className="p-3"> Product Name</label>
              <input
                className="fomr-control product-input"
                type="Text"
                name="product"
                id="product"
              ></input>
            </div>
            <div className="form-group mt-3">
              <input type="file" name="file" onChange={0} /> <br></br>
              <button className="" type="submit">
                Upload
              </button>
              {any ? (
                <div>
                  <p>Filename: {any.name}</p>
                  <p>Filetype: {any.type}</p>
                  <p>Size in bytes: {any.size}</p>
                  <p>
                    lastModifiedDate:{" "}
                    {any.lastModifiedDate.toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <p></p>
              )}
              <div>
                <button className="mt-5" onClick={any}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Variant;
