import { useEffect } from "react";

const ESignSuccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    if (status === "success") {
      alert("✅ Aadhaar eSign Successful!");
    } else {
      alert("❌ eSign Failed");
    }
  }, []);

  return <h2>eSign Status Page</h2>;
};

export default ESignSuccess;