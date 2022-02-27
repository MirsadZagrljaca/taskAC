import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/")}
        >
          Home
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/customers")}
        >
          Customers
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/customers/add")}
        >
          Add a customer
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/programs")}
        >
          Washing programs
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/programs/add")}
        >
          Add program
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/services")}
        >
          Services
        </button>
      </div>

      <div className="sidebar-home">
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={() => window.location.assign("/services/add")}
        >
          Add a service
        </button>
      </div>
    </div>
  );
}
