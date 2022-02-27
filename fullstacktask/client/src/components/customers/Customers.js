import React, { useState, useEffect } from "react";
import base from "../../config";
import Sidebar from "../core/Sidebar";
import axios from "axios";

export default function Customers() {
  const [limit, setLimit] = useState(10);
  const [customers, setCustomers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(async () => {
    let data = await axios.get(`${base}/customer/limit/${limit}`);

    setCustomers(data.data);
  }, [limit]);

  useEffect(async () => {
    if (query.length === 0) {
      let data = await axios.get(`${base}/customer/limit/${limit}`);

      setCustomers(data.data);
    }

    if (query.length < 3) return;

    let data = await axios.get(`${base}/customer/find/${query}`);
    setCustomers(data.data);
  }, [query]);

  return (
    <div className="main">
      <Sidebar />

      <div className="customers">
        <div>
          <h2>Customers</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search customers..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Number of services</th>
              </tr>
            </thead>

            <tbody>
              {customers &&
                customers.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.phone}</td>
                      <td>{v.numberOfServices}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {query === "" && (
            <button
              type="button"
              className="btn btn-danger btn-lg btn-block"
              onClick={() => setLimit(limit + 10)}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
