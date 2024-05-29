import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Formulaire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (field) => {
    setIsLoading(true);
    const { status } = await axios.post("/api", field);
    if (status === 200) {
      toast("Vous devrez recevoir un email si ", {
        icon: "👏",
        duration: 5000,
      });
    }
    setIsLoading(false);
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="form">
        <Toaster
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 400,
            },
          }}
        />
        <ul className="wrapper">
          <li style={{ "--i": 5 }}>
            <input
              className="input"
              type="text"
              placeholder="Object"
              required={true}
              {...register("object")}
            />
          </li>
          <li style={{ "--i": 4 }}>
            <input
              className="input"
              type="text"
              {...register("name")}
              placeholder="Name"
              required={true}
            />
          </li>
          <li style={{ "--i": 3 }}>
            <input
              className="input"
              placeholder="Phone number"
              {...register("phone")}
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
              {...register("email")}
            />
          </li>
          <button
            style={{ "--i": 1 }}
            className="btn_form"
            isLoading={isLoading}
            type="submit"
          >
            Submit
          </button>
        </ul>
      </form>
    </div>
  );
};

export default Formulaire;
