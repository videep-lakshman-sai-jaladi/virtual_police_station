import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("citizen"); 
  const [loginData, setLoginData] = useState({ email: "", password: "", badgeId: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, loginData);
    
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card" style={{ maxWidth: "450px" }}>
        
        {/* Role Selection Tabs */}
        <div className="d-flex justify-content-center mb-4 p-1 bg-light rounded-pill">
          <button 
            className={`btn rounded-pill w-50 fw-bold ${role === "citizen" ? "btn-dark shadow" : "btn-light text-muted"}`}
            onClick={() => setRole("citizen")}
          >
            Citizen
          </button>
          <button 
            className={`btn rounded-pill w-50 fw-bold ${role === "police" ? "btn-dark shadow" : "btn-light text-muted"}`}
            onClick={() => setRole("police")}
          >
            Police
          </button>
        </div>

        <h3 className="text-center fw-bold mb-2">
          {role === "citizen" ? "Citizen Login" : "Police Portal"}
        </h3>
        <p className="text-center text-muted small mb-4">
          {role === "citizen" 
            ? "Access your FIRs and digital documents." 
            : "Authorized personnel access only."}
        </p>

        <form onSubmit={handleLogin}>
          {role === "police" && (
            <div className="mb-3 animate__animated animate__fadeIn">
              <label className="form-label fw-semibold">Badge ID / Service No.</label>
              <input
                type="text"
                name="badgeId"
                className="form-control py-2 border-primary"
                placeholder="Enter ID"
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Email / Username</label>
            <input
              type="email"
              name="email"
              className="form-control py-2"
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control py-2"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={`btn w-100 py-2 fw-bold shadow-sm ${role === 'police' ? 'btn-primary' : 'btn-dark'}`}>
            Login to {role === "citizen" ? "Citizen Dashboard" : "Admin Panel"}
          </button>

          <div className="text-center mt-4">
            <small className="text-muted">
              {role === "citizen" ? (
                <>New user? <span className="text-primary fw-bold" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>Register here</span></>
              ) : (
                <span className="text-danger fw-bold italic small">Restricted Government Access</span>
              )}
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;