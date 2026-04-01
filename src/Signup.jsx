import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", password: "",
    confirmPassword: "", dob: "", aadhaar: "", pan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    /* We use 'auth-page-container' from the new CSS for full-width background */
    <div className="auth-page-container">
      
      {/* We use 'auth-card' from the new CSS to make it wide and professional */}
      <div className="auth-card">
        <h2 className="text-center fw-bold mb-4">Citizen Registration</h2>
        <p className="text-center text-muted mb-4">Register for the Virtual Police Station Portal</p>
        <hr className="mb-4" />

        <form>
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter full name" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="+91..." />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Aadhaar Number</label>
                <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} className="form-control" placeholder="12-digit UID" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">PAN Number</label>
                <input type="text" name="pan" value={formData.pan} onChange={handleChange} className="form-control" placeholder="ABCDE1234F" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-dark w-100 py-2 fw-bold shadow-sm">
              Create Account
            </button>
          </div>
          
          <div className="text-center mt-3">
             <small>Already registered? <a href="/login" className="text-decoration-none">Login here</a></small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;