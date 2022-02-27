import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import base from "../../config";
import Sidebar from "../core/Sidebar";

export default function AddProgram() {
  const [values, setValues] = useState({
    name: "",
    price: 0,
    error: "",
    redirect: false,
  });
  const [steps, setSteps] = useState([""]);

  const stepsChangeHandler = (i, e) => {
    let newSteps = steps;

    newSteps[i] = e.target.value;

    setSteps(newSteps);
  };

  const submit = async () => {
    let newProgram = {
      name: values.name,
      price: values.price,
      steps: steps,
    };

    let res = await axios.post(`${base}/program`, newProgram);

    if (res.data.error) {
      setValues({ ...values, error: res.data.error });
    } else {
      setValues({ ...values, error: "", redirect: true });
    }
  };

  if (values.redirect) {
    return window.location.assign("/programs");
  }

  return (
    <div className="main">
      <Sidebar />

      <div className="add-program">
        <div>
          <h2>Add a Washing Program</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name..."
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="price..."
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>

          {steps &&
            steps.map((v, i) => {
              return (
                <div className="input-group mb-3" key={i}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="steps..."
                    onChange={(e) => stepsChangeHandler(i, e)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setSteps([...steps, ""])}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}

          {values.error && <Alert variant="danger">{values.error}</Alert>}

          <div className="add-buttons">
            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={submit}
            >
              Submit
            </button>

            <button
              type="button"
              className="btn btn-danger btn-lg btn-block"
              onClick={() => window.location.assign("/customers")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
