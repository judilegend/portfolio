import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Contact.css';

const Formulaire = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/sendEmail", data);
      if (response.status === 200) {
        toast("Email bien reçu", {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("to")} placeholder="Recipient's email" required />
      <input type="text" {...register("subject")} placeholder="Subject" required />
      <textarea {...register("text")} placeholder="Message" required></textarea>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Email'}
      </button>
    </form>
  );
};

export default Formulaire;
