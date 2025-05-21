import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_chqcmog",    // replace with your EmailJS service ID
      "template_j6jc7xm",   // replace with your EmailJS template ID
      form.current,
      "-T_-kU2bC8z-PeRsY"   // replace with your EmailJS public key (user id)
    )
    .then(() => {
      setSent(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto text-left">
      <label className="block mb-2 text-gray-700">Name</label>
      <input type="text" name="name" required className="w-full border px-3 py-2 mb-4 rounded" />

      <label className="block mb-2 text-gray-700">Email</label>
      <input type="email" name="email" required className="w-full border px-3 py-2 mb-4 rounded" />

      <label className="block mb-2 text-gray-700">Message</label>
      <textarea name="message" required className="w-full border px-3 py-2 mb-4 rounded h-32"></textarea>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Send
      </button>

      {sent && <p className="text-green-600 mt-4">Message sent successfully!</p>}
    </form>
  );
}

export default ContactForm;