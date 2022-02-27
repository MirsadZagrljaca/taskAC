import axios from "axios";
import React, { useState, useEffect } from "react";
import base from "../../config";
import Sidebar from "../core/Sidebar";
import { Alert } from "react-bootstrap";

export default function AddService() {
  const [values, setValues] = useState({
    customer: "",
    program: "",
    discount: 0,
    error: "",
    redirect: false,
  });
  const [customers, setCustomers] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${base}/customer`);
    setCustomers(res.data);

    let response = await axios.get(`${base}/program`);
    setPrograms(response.data);
  }, []);

  const selectingCustomer = (e) => {
    if (e.target.value === "") return;

    let id = "";
    let discount = 0;

    let temp = customers;

    temp.map((v, i) => {
      if (v.name === e.target.value) {
        id = v._id;
        if (v.numberOfServices % 10 === 9) {
          discount = 10;
        }
      }
    });

    setValues({ ...values, error: "", customer: id, discount: discount });
  };

  const selectingProgram = (e) => {
    if (e.target.value === "") return;

    let id = "";

    programs.map((v, i) => {
      if (v.name === e.target.value) {
        id = v._id;
      }
    });

    console.log(id);

    setValues({ ...values, error: "", program: id });
  };

  const submit = async () => {
    let newSevice = {
      customer: values.customer,
      program: values.program,
      discount: values.discount,
    };

    console.log(newSevice);

    let resp = await axios.post(`${base}/service`, newSevice);

    console.log(resp.data);

    if (resp.data.error) {
      setValues({ ...values, error: resp.data.error });
    } else {
      setValues({ ...values, error: "" });

      let res = await axios.put(`${base}/customer/update/${values.customer}`);

      if (res.data.error) {
        setValues({ ...values, error: "Error Occured" });
      } else {
        setValues({ ...values, error: "", redirect: true });
      }
    }
  };

  if (values.redirect) {
    return window.location.assign("/services");
  }

  return (
    <div className="main">
      <Sidebar />

      <div className="add-service">
        <div>
          <h2>Add Service</h2>

          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="customer..."
              list="customers"
              onChange={selectingCustomer}
            />

            <datalist id="customers">
              {customers &&
                customers.map((v, i) => {
                  return <option key={i} value={v.name} />;
                })}
            </datalist>
          </div>

          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="program..."
              list="programs"
              onChange={selectingProgram}
            />

            <datalist id="programs">
              {programs &&
                programs.map((v, i) => {
                  return <option key={i} value={v.name} />;
                })}
            </datalist>
          </div>

          <div className="input-group mb-3">
            <input
              type="Text"
              className="form-control"
              placeholder="discount..."
              value={"Discount " + values.discount + "%"}
              disabled
            />
          </div>

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
