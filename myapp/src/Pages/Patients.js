import React, { useEffect, useState } from "react";
import PatientCard from "../Components/PatientCard";
import "../App.css"

function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newPatient, setNewPatient] = useState({ name: "", email: "", age: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const withAge = data.map((p) => ({
          ...p,
          age: Math.floor(Math.random() * 30) + 20,
        }));
        setPatients(withAge);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const handleAddPatient = (e) => {
    e.preventDefault();

    if (!newPatient.name || !newPatient.email || !newPatient.age) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      id: patients.length + 1,
      name: newPatient.name,
      email: newPatient.email,
      age: newPatient.age,
    };

    setPatients([newEntry, ...patients]);
    setNewPatient({ name: "", email: "", age: "" });
    setShowForm(false); // hide form after adding
  };

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h2 className="page-title">Our Patients</h2>

      {/* Toggle Add Patient */}
      <div className="add-section">
        {!showForm ? (
          <button className="add-toggle" onClick={() => setShowForm(true)}>
            ➕ Add Patient
          </button>
        ) : (
          <form className="add-form" onSubmit={handleAddPatient}>
            <input
              type="text"
              placeholder="👤 Name"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="📧 Email"
              value={newPatient.email}
              onChange={(e) =>
                setNewPatient({ ...newPatient, email: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="🎂 Age"
              value={newPatient.age}
              onChange={(e) =>
                setNewPatient({ ...newPatient, age: e.target.value })
              }
            />
            <div className="form-actions">
              <button type="submit">✅ Save</button>
              <button type="button" onClick={() => setShowForm(false)}>
                ❌ Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Search */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Patients List */}
      <div className="patient-grid">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))
        ) : (
          <p className="not-found">❌ No patients found</p>
        )}
      </div>
    </div>
  );
}

export default Patients;
