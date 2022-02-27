import React from "react";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="main">
      <Sidebar />

      <div className="home">
        <div>
          <h2>Welcome to Car Wash site</h2>

          <p>Follow sidebar to explore features</p>

          <p>Enjoy!</p>
        </div>
      </div>
    </div>
  );
}
