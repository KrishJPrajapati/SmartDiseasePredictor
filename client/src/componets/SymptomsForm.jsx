import React, { useState } from "react";
import { Box, Grid, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import DepressionPredictionCard from "./DepressionPredictionCard";

const initialSymptoms = [
  { id: 50, name: "Head Ache" },
  { id: 15, name: "Cough" },
  { id: 1, name: "Depression" },
  { id: 198, name: "Fatigue" },
  { id: 280, name: "Skin Rash" },
  { id: 0, name: "Anxiety and Nervousness" },
];

const moreSymptoms = [
  { id: 322, name: "Continuous Sneezing" },
  { id: 8, name: "Shivering" },
  { id: 5, name: "Dizziness" },
  { id: 4, name: "Chest Pain" },
  { id: 51, name: "Nausea" },
  { id: 2, name: "Shortness of Breath" },
  { id: 158, name: "Loss of Appetite" },
  { id: 83, name: "Blurred Vision" },
  { id: 13, name: "Sore Throat" },
  { id: 49, name: "Vomiting" },
  { id: 168, name: "Fever" },
  { id: 93, name: "Back Pain" },
];

const SymptomsForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // Toggle checkbox selection
  const handleCheckboxChange = (id) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Get symptom names from IDs
  const getSymptomNames = (ids) => {
    const allSymptoms = [...initialSymptoms, ...moreSymptoms];
    return allSymptoms
      .filter((symptom) => ids.includes(symptom.id))
      .map((symptom) => symptom.name);
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom!");
      return;
    }

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
      });
      const result = await response.json();
      alert("Prediction sent successfully! Check the result.");
      console.log("Prediction Response:", result);
    } catch (error) {
      console.error("Error submitting symptoms:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5DADE2",
        padding: "24px 80px",
        borderRadius: 2,
        width: { md: "60%", xs: "auto" },
        margin: "auto",
        textAlign: "center",
        borderRadius: "3%",
        border: "12px solid #C0E4FA",
        marginTop: "5%",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        SELECT THE SYMPTOMS YOU FACE ?
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {(showMore ? [...initialSymptoms, ...moreSymptoms] : initialSymptoms).map((symptom) => (
          <Grid item xs={12} sm={6} key={symptom.id} sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSymptoms.includes(symptom.id)}
                  onChange={() => handleCheckboxChange(symptom.id)}
                  color="primary"
                />
              }
              label={symptom.name}
              sx={{ width: "100%", display: "flex", alignItems: "center", gap: 1 }}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ borderTop: "3px solid red", marginTop: 2, paddingTop: 1, paddingBottom: 5 }}>
        {!showMore && (
          <Button
            variant="text"
            sx={{ color: "white", fontWeight: "bold" }}
            onClick={() => setShowMore(true)}
          >
            PROCEED MORE
          </Button>
        )}
      </Box>

      {/* Display Selected Symptom Names */}
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Selected Symptoms:</Typography>
        <Typography variant="body1" sx={{ color: "blue" }}>
          {getSymptomNames(selectedSymptoms).join(", ")}
        </Typography>
      </Box>

      {/* Submit Button */}
      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          
          sx={{ fontWeight: "bold",margin:'10px 50px', padding: "10px 20px",color:"#7F2929" }}
          onClick={handleSubmit}
        >
          SUBMIT SYMPTOMS
        </Button>
      </Box>

      <DepressionPredictionCard />
    </Box>
  );
};

export default SymptomsForm;
