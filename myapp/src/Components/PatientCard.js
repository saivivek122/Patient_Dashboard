import React, { useState } from "react";
import "../App.css";

function PatientCard({ patient }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card">
        <h3>{patient.name}</h3>
        <p>👤 Age: {patient.age}</p>
        <p>📞 {patient.phone}</p>
        <button className="btn" onClick={() => setShow(true)}>
          View Details
        </button>
      </div>

      {show && (
        <div className="modal" onClick={() => setShow(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{patient.name}</h3>
            <p>📧 {patient.email}</p>
            <p>🏠 {patient.address?.city}</p>
            <button className="btn close" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PatientCard;
