import React, { useState, useEffect } from "react";
import axios from "axios";
import base from "../../config";
import Sidebar from "../core/Sidebar";

export default function Services() {
  const [data, setData] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${base}/service`);

    setData(res.data);
  }, []);

  return (
    <div className="main">
      <Sidebar />

      <div className="services">
        <div>
          <h2>Services Provided to Customers</h2>

          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Program</th>
                <th>Discount</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>{v.customer.name}</td>
                      <td>{v.program.name}</td>
                      <td>{v.discount}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
