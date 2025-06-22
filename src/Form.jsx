import React, { useState } from "react";

const Form = ({ onResult, disabled }) => {
  const [formData, setFormData] = useState({
    skin_type: "",
    issue: "",
    duration: "",
    age_group: "",
    sensitivity: "",
    current_routine: "",
    water_intake: "",
    sun_exposure: "",
    allergies: "",
    skincare_goal: "",
    budget_range: "",
    sleep_hours: "",
  });
  const formLabels = {
    skin_type: "Apki skin kis type ki hai?",
    issue: "Apki skin ka masla kis qism ka hai?",
    duration: "Apko kitni der se ya masla hai?",
    age_group: "Apka age group kya hai?",
    sensitivity: "Apki skin kitni sensitive hai?",
    current_routine: "Apki current skincare routine kya hai?",
    water_intake: "Ap rozana kitna pani peetay hain?",
    sun_exposure: "Ap rozana kitna dhoop mein rehtay hain?",
    allergies: "Kya apko kisi chez se allergy hai?",
    skincare_goal: "Apka skincare goal kya hai?",
    budget_range: "Apka budget range kya hai?",
    sleep_hours: "Rozana kitni der ki neend lete hain?"
  };

  const getOptions = (key) => {
    switch (key) {
      case "skin_type":
        return ["Oily", "Dry", "Combination", "Normal"];
      case "duration":
        return ["1 week", "2 weeks", "1 month", "2 months", "3+ months"];
      case "age_group":
        return ["Teen", "Adult", "30+", "40+"];
      case "sensitivity":
        return ["Low", "Moderate", "High"];
      case "water_intake":
        return ["<1L", "1-2L", "2-3L", "3L+"];
      case "sun_exposure":
        return ["Low", "Medium", "Daily", "High"];
      case "budget_range":
        return ["<Rs. 500", "Rs. 500 - 1000", "Rs. 1000 - 1500", "Rs. 1500+"];
      case "sleep_hours":
        return ["<5", "5-6", "6-7", "7-8", "8+"];
      default:
        return [];
    }
  };

  const dropdownFields = [
    "skin_type",
    "duration",
    "age_group",
    "sensitivity",
    "water_intake",
    "sun_exposure",
    "budget_range",
    "sleep_hours",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onResult(formData); // ✅ Ye App.js ko data dega

  };


  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div key={key} style={{ marginBottom: "12px" }}>
          <label style={{ fontWeight: "bold" }}>{formLabels[key] || key.replace(/_/g, " ")}:</label>

          {dropdownFields.includes(key) ? (
            <select
              name={key}
              value={formData[key]}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
              required
              disabled={disabled}
            >
              <option value="">Select {key.replace(/_/g, " ")}</option>
              {getOptions(key).map((option, i) => (
                <option key={i} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder={`Enter ${key.replace(/_/g, " ")}`}
              style={{ width: "100%", padding: "8px" ,borderRadius: "8px", border: "1px solid #ccc", marginTop: "5px", fontSize: "15px"}}
              required
              disabled={disabled}
            />
          )}
        </div>
      ))}

      <button type="submit" disabled={disabled} style={{ padding: "12px 20px", fontWeight: "bold", background: "#5C67F2", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "20px"}}>
        Submit
      </button>
    </form>
  );
};

export default Form;
