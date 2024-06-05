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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/", data);
      if (response.status === 200) {
        toast("email bien recu", {
          icon: "👏",
          duration: 5000,
        });
      } else {
        toast("Échec de l'envoi de l'email", {
          icon: "😞",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Une erreur s'est produite", {
        icon: "😞",
        duration: 5000,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
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
              {...register("object", { required: true })}
            />
          </li>
          <li style={{ "--i": 4 }}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </li>
          <li style={{ "--i": 3 }}>
            <input
              className="input"
              placeholder="Phone number"
              {...register("phone", { required: true })}
              name="phone"
            />
          </li>
          <li style={{ "--i": 2 }}>
            <input
              className="input"
              type="email"
              placeholder="E-mail"
              name="email"
              {...register("email", { required: true })}
            />
          </li>
          <button
            style={{ "--i": 1 }}
            className="btn_form"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </ul>
      </form>
    </div>
  );
};

export default Formulaire;
