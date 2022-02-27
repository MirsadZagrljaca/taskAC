import axios from "axios";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import base from "../../config";
import Sidebar from "../core/Sidebar";

export default function AddCustomer() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    error: "",
    redirect: false,
  });

  const submit = async () => {
    let newCustomer = {
      name: values.name || undefined,
      email: values.email || undefined,
      phone: values.phone || undefined,
    };

    let res = await axios.post(`${base}/customer`, newCustomer);

    if (res.data.error) {
      setValues({ ...values, error: res.data.error });
    } else {
      setValues({ ...values, error: "", redirect: true });
    }
  };

  if (values.redirect) {
    return window.location.assign("/customers");
  }

  return (
    <div className="main">
      <Sidebar />

      <div className="add-customer">
        <div>
          <h2>Add a customer</h2>

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
              type="text"
              className="form-control"
              placeholder="email..."
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="phone..."
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          {values.error && (
            <Alert variant="danger" style={{ marginBottom: "1rem" }}>
              {values.error}
            </Alert>
          )}

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
