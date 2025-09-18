import React, { useEffect, useState } from "react";
import PatientCard from "../Components/PatientCard";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h2 className="page-title">Our Patients</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
