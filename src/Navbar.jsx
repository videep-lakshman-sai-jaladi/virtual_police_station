import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid px-4">

        <div className="d-flex align-items-center">
          <img
            src="https://th.bing.com/th?q=India+Logo+Without+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247"
            alt="logo"
            height="50"
            className="me-2"
          />
          <div>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Virtual Police Station
            </div>
            <small style={{ fontSize: "12px", color: "gray" }}>
              With Digital FIR System (OCR & Aadhaar)
            </small>
          </div>
        </div>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <button
  className="nav-link active btn btn-link"
  onClick={() => navigate("/")}
>
  Home
</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
             <button 
                className="btn   px-3 ms-lg-2" 
                onClick={() => navigate("/e-fir")} 
              >
                File a complaint
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-lg-3 mt-2 mt-lg-0">
            <button
              className="btn btn-outline-dark"
              onClick={() => navigate("/Signup")}
            >
              Signup
            </button>
            <button className="btn btn-outline-dark"
                    onClick={() => navigate("/Login")}>Login</button>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;