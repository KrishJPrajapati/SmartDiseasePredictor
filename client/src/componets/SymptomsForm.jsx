import React, { useState } from "react";
import { Box, Grid, FormControlLabel, Checkbox, Button, Typography } from "@mui/material";
import DepressionPredictionCard from "./DepressionPredictionCard";

const initialSymptoms = [
  "Head Ache", "Cough", "Eaching", "Fatigue", "Skin Rash", "Anxiety"
];

const moreSymptoms = [
  "Continuous Sneezing", 
  "Shivering", 
  "Joint Pain", 
  "Stomach Pain", 
  "Dizziness", 
  "Chest Pain", 
  "Nausea", 
  "Shortness of Breath", 
  "Loss of Appetite", 
  "Blurred Vision", 
  "Sore Throat", 
  "Vomiting", 
  "Fever", 
  "Back Pain", 
];

const SymptomsForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleCheckboxChange = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((item) => item !== symptom) : [...prev, symptom]
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5DADE2",
        padding: "24px 80px", // Increased left & right padding
        borderRadius: 2,
        width: "60%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        SELECT THE SYMPTOMS YOU FACE ?
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {(showMore ? [...initialSymptoms, ...moreSymptoms] : initialSymptoms).map((symptom) => (
          <Grid item xs={12} sm={6} key={symptom} sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleCheckboxChange(symptom)}
                  color="primary"
                />
              }
              label={symptom}
              sx={{ width: "100%", display: "flex", alignItems: "center", gap: 1 }}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ borderTop: "3px solid red", marginTop: 2, paddingTop: 1 , paddingBottom: 5 }}>
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

      <DepressionPredictionCard/>
    </Box>
  );
};

export default SymptomsForm;
