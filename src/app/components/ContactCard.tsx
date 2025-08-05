//src/app/components/ContactCard.tsx
'use client';

import { useState } from 'react';

export function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted contact form:', formData);
    alert('Thanks for reaching out! ✨');
  }

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden text-center px-4 py-10 text-white">
        <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
        <p className="text-sm text-gray-300 mb-4">
          Use this form to send a message or add your own contact details here.
        </p>
        <div className="flex flex-col gap-3 items-center">
          <a
            href="mailto:youremail@example.com"
            className="bg-gray-800 border border-gray-700 text-white text-xs px-3 py-1.5 rounded-full shadow hover:bg-gray-700 transition"
          >
            Email 💌
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-gray-700 text-white text-xs px-3 py-1.5 rounded-full shadow hover:bg-gray-700 transition"
          >
            LinkedIn 💼
          </a>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 rounded-3xl shadow-xl max-w-4xl w-full mx-auto text-white text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-8">
          Feel free to reach out for projects, collaborations, or just to say hello.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto text-left relative"
        >
          <label className="flex flex-col gap-y-1">
            <span className="text-sm">Name</span>
            <input
              name="name"
              type="text"
              required
              onChange={handleChange}
              className="w-full border border-gray-600 bg-gray-800 text-white rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-y-1">
            <span className="text-sm">Email</span>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-600 bg-gray-800 text-white rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <label className="flex flex-col gap-y-1">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              onChange={handleChange}
              className="w-full border border-gray-600 bg-gray-800 text-white rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </label>

          <button
            type="submit"
            className="bg-gray-800 border border-gray-700 text-white py-2 px-4 rounded shadow w-full hover:bg-gray-700 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* 
        🧩 BASEHUB INTEGRATION GUIDE (optional)

        // 1. Instalar dependencias:
        // npm install basehub/react-pump basehub/events

        // 2. Importar lo necesario:
        import { Pump } from 'basehub/react-pump';
        import { parseFormData, sendEvent } from 'basehub/events';

        // 3. Reemplazar el return con esto:

        return (
          <Pump
            queries={[
              {
                contactForm: {
                  form: {
                    ingestKey: true,
                    schema: true,
                  },
                },
              },
            ]}
          >
            {async ([{ contactForm }]) => {
              "use server";
              const ingestKey = contactForm.form.ingestKey;

              return (
                <form
                  action={async (formData) => {
                    "use server";
                    const parsedSubmission = parseFormData(
                      ingestKey,
                      contactForm.form.schema,
                      formData
                    );
                    if (!parsedSubmission.success) {
                      throw new Error(JSON.stringify(parsedSubmission.errors));
                    }
                    sendEvent(ingestKey, parsedSubmission.data);
                  }}
                >
                  {contactForm.form.schema.map((field) => {
                    const Input = field.type === "textarea" ? "textarea" : "input";
                    return (
                      <label key={field.id}>
                        <Input {...field} rows={4} />
                      </label>
                    );
                  })}
                  <button type="submit">Send</button>
                </form>
              );
            }}
          </Pump>
        );

        // 4. Crear el form schema en tu panel de BaseHub (https://basehub.com)
      */}
    </>
  );
}
