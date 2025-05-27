import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_chqcmog",    // your EmailJS service ID
      "template_j6jc7xm",   // your EmailJS template ID
      form.current,
      "-T_-kU2bC8z-PeRsY"   // your EmailJS public key
    )
    .then(() => {
      setSent(true);
      form.current.reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <div className="max-w-lg mx-auto text-left py-6">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1 text-white">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border px-3 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-white">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border px-3 py-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-white">Message</label>
          <textarea
            name="message"
            required
            className="w-full border px-3 py-2 rounded h-32 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition btn"
        >
          Send
        </button>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            className="mt-6 p-4 text-green-400 text-center border border-green-500 rounded"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            🎉 Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
