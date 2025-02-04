"use client";
import { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(result.message);
        setFormData({ name: "", email: "", subject: "", message: "",});
      } else {
        setStatus(result.error);
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi.");
      console.log(error)
    }
  };

  return (
    <section id="contact" className="h-full my-12 mx-auto p-8">
      <h2 className="text-center mb-5 text-2xl font-semibold">Contactez-moi&nbsp;!</h2>
      <form 
      id="contact-form" 
      action="" 
      method="POST"
      onSubmit={handleSubmit} 
      className="flex flex-col items-center">
        <div className="input-group mb-4 flex flex-col items-center">
          <label htmlFor="name" className="text-sm mb-1">Votre nom</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="w-3/4 p-2 text-sm border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group mb-4 flex flex-col items-center">
          <label htmlFor="email" className="text-sm mb-1">Votre adresse email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange}
            required 
            className="w-3/4 p-2 text-sm border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group mb-4 flex flex-col items-center">
          <label htmlFor="subject" className="text-sm mb-1">Objet</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
            className="w-3/4 p-2 text-sm border border-gray-300 rounded-md"
          />
        </div>
        <div className="input-group mb-4 flex flex-col items-center">
          <label htmlFor="message" className="text-sm mb-1">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            required 
            className="w-3/4 p-2 text-sm border border-gray-300 rounded-md resize-y"
          />
        </div>
        <button 
          type="submit" 
          className="w-[30vw] p-3 text-lg bg-[var(--primary-color)] border-2 border-[var(--third-color)] text-white rounded-md cursor-pointer transition-all duration-500 hover:bg-[var(--third-color)] 
          hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] font-bold"
        >
          Envoyer
        </button>
        {status && <p className="mt-2 text-sm">{status}</p>}
      </form>
    </section>

  );
};

export default Form;
