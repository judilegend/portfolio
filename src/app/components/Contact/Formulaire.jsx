import React from "react";
import "./Contact.css";

const Formulaire = () => {
  return (
    <div className="mx-auto">
      <form className="form">
        <ul className="wrapper">
          <li style={{ "--i": 5 }}>
            <input
              className="input"
              type="text"
              placeholder="Object"
              required={true}
            />
          </li>
          <li style={{ "--i": 4 }}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              required={true}
            />
          </li>
          <li style={{ "--i": 3 }}>
            <input
              className="input"
              placeholder="Phone number"
              required={true}
              name="phone"
            />
          </li>
          <li style={{ "--i": 2 }}>
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              required={true}
              name="email"
            />
          </li>
          <button style={{ "--i": 1 }} className="btn_form">
            Submit
          </button>
        </ul>
      </form>
    </div>
  );
};

export default Formulaire;
