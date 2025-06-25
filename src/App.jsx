import React, { useState } from "react";
import Form from "./Form";
import ReactMarkdown from "react-markdown";

import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async (formData) => {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch(
        "https://37c3a283-d9e7-411c-996e-a182d6b2e9f4-00-2h0193gn4rc97.pike.replit.dev/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.text();
      let cleaned = data;
      // Check if it's a JSON string (e.g., starts and ends with quotes)
      if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
        cleaned = JSON.parse(cleaned); // removes \" and replaces \n with new lines
      }

      setResult(cleaned);
    } catch (error) {
      console.error("API Error:", error);
      setResult("⚠️ Gemini se response nahi mila. Dobara try karo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>

      <div className="container">
        <h1>💆‍♀️ SkinAI – Skincare Advisor</h1>
        <p>
          Apni skin details den aur Ya AI System Roman Urdu mein advice dega!
        </p>


        <Form onResult={handleResult} disabled={loading} />
        {loading && <div className="loader"></div>}

        {!loading && result && (
          <div className="result-box">
            <h3>🔍 Hamray Ai ka Mashwara:</h3>
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
