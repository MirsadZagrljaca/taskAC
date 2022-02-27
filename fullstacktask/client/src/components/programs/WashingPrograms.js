import React, { useState, useEffect } from "react";
import SideBar from "../core/Sidebar";
import axios from "axios";
import base from "../../config";

export default function WashingPrograms() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let res = await axios.get(`${base}/program`);

    setData(res.data);
  }, []);

  return (
    <div className="main">
      <SideBar />

      <div className="programs">
        <div>
          <h2>Washing Programs</h2>

          <div className="programs">
            {data &&
              data.map((v, i) => {
                return (
                  <div className="programs-single" key={i}>
                    <div className="programs-single-top">
                      <h4>{v.name}</h4>
                      <h4>{v.price}</h4>
                    </div>

                    <div className="programs-single-bottom">
                      {v.steps.map((value, index) => {
                        return (
                          <div className="steps" key={index}>
                            <p>
                              {value} <span>,</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
