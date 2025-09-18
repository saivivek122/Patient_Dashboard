import React, { useState } from "react";

export default function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Name required");
    onAdd({ name: name.trim(), age: age ? Number(age) : "N/A", contact, email });
    setName(""); setAge(""); setContact(""); setEmail("");
  };

  return (
    <form className="add-form" onSubmit={submit}>
      <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
      <input placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <button className="btn" type="submit">Add Patient</button>
      </div>
    </form>
  );
}
