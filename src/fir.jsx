import React, { useState } from 'react';

const FIRForm = () => {
  const [formData, setFormData] = useState({
    complainantName: '', fatherName: '', contact: '', incidentDate: '',
    incidentTime: '', location: '', district: '', policeStation: '',
    offenceType: 'Theft', description: '', accusedDetails: '',
    witnessDetails: '', evidence: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final FIR Submission:', formData);
    alert('FIR Complaint Registered Successfully in the Virtual Station Database!');
  };

  return (
    <div className="fir-page-container">
      <div className="container">
        
        {/* STEP 2: THE CARD - Styles the form content */}
        <div className="card fir-card-custom border-0">
          
          <div className="card-header bg-white text-center py-4 border-0">
            <h2 className="fw-bold" style={{ color: '#002147' }}>VIRTUAL POLICE STATION</h2>
            <p className="text-muted fw-semibold">Digital First Information Report (FIR) Submission</p>
            <hr className="w-25 mx-auto" style={{ borderTop: '3px solid #ffc107', opacity: 1 }} />
          </div>

          <div className="card-body px-lg-5">
            <form onSubmit={handleSubmit}>
              
              <h5 className="fir-section-title">1. Complainant Information</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Full Name</label>
                  <input type="text" name="complainantName" className="form-control fir-input" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Father/Husband's Name</label>
                  <input type="text" name="fatherName" className="form-control fir-input" onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold">Contact Number</label>
                  <input type="tel" name="contact" className="form-control fir-input" placeholder="+91" onChange={handleChange} required />
                </div>
              </div>

              <h5 className="fir-section-title">2. Incident Details</h5>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Date of Occurrence</label>
                  <input type="date" name="incidentDate" className="form-control fir-input" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Time of Occurrence</label>
                  <input type="time" name="incidentTime" className="form-control fir-input" onChange={handleChange} required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Specific Location / Landmarks</label>
                <textarea name="location" className="form-control fir-input" rows="2" placeholder="Describe where it happened..." onChange={handleChange} required></textarea>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">District</label>
                  <input type="text" name="district" className="form-control fir-input" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Jurisdictional Police Station</label>
                  <input type="text" name="policeStation" className="form-control fir-input" onChange={handleChange} required />
                </div>
              </div>

              <h5 className="fir-section-title">3. Offence & Narrative</h5>
              <div className="mb-3">
                <label className="form-label fw-bold">Nature of Offence</label>
                <select name="offenceType" className="form-select fir-input" onChange={handleChange}>
                  <option value="Theft">Theft / Burglary</option>
                  <option value="Assault">Physical Assault</option>
                  <option value="CyberCrime">Cyber Crime / Fraud</option>
                  <option value="Missing">Missing Person</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">Detailed Incident Statement</label>
                <textarea name="description" className="form-control fir-input" rows="5" placeholder="Provide a chronological sequence of the event..." onChange={handleChange} required></textarea>
              </div>

              {/* SECTION 4: EVIDENCE */}
              <h5 className="fir-section-title">4. Evidence & Evidence</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Accused Details (if known)</label>
                  <textarea name="accusedDetails" className="form-control fir-input" rows="2" placeholder="Description or name..." onChange={handleChange}></textarea>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Witness Contacts</label>
                  <textarea name="witnessDetails" className="form-control fir-input" rows="2" placeholder="Names and phone numbers..." onChange={handleChange}></textarea>
                </div>
              </div>

              <div className="mb-5">
                <label className="form-label fw-bold">Upload Digital Evidence</label>
                <input type="file" className="form-control fir-input" onChange={handleFileChange} />
                <small className="text-muted d-block mt-1">Allowed: JPG, PNG, PDF (Max 5MB)</small>
              </div>

              {/* SUBMIT */}
              <div className="d-grid shadow-sm">
                <button type="submit" className="btn fir-btn-submit text-uppercase">
                  Submit Digital FIR
                </button>
                <p className="text-center text-danger small mt-2 fw-bold">
                  * Providing false information is a punishable offense under IPC.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRForm;