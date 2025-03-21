import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const DepressionPredictionCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E86C1",
        padding: 3,
        borderRadius: 4,
        width: "90%",
        margin: "auto",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 2 }}>
        PREDICTION : DEPRESSION
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        MEDICINES :
      </Typography>
      <List dense>
        {[
          "Selective serotonin reuptake inhibitors (SSRIs)",
          "Heterocyclic antidepressants",
          "Monoamine oxidase inhibitors (MAOIs)",
          "Melatonergic antidepressant (agomelatine)",
          "Bupropion",
          "Mirtazapine",
          "Trazodone",
        ].map((medicine, index) => (
          <ListItem key={index}>
            <ListItemText primary={`• ${medicine}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        YOGASANA :
      </Typography>
      <List dense>
        {[
          "Shishuasana (Child Pose) - Deeply relaxing",
          "Halasana (Plow Pose) - Calms the nervous system, reducing stress",
          "Shavasana (Corpse Pose) - Enables a deep and meditative rest",
          "Mukha Svanasana (Downward-facing Dog Pose)",
          "Setu Bandhasana (Bridge Pose) - Calms the brain, reducing anxiety",
        ].map((yoga, index) => (
          <ListItem key={index}>
            <ListItemText primary={`• ${yoga}`} />
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        REMEDIES :
      </Typography>
      <List dense>
        {[
          "Limited or No Refined Carbohydrates and Sugars.",
          "Fish Oil - Omega-3 fats are critical for neurotransmitter function.",
          "Probiotics - Research shows that probiotic supplements can improve mental health.",
          "Vitamin D3 - A systematic review evaluating its efficacy.",
        ].map((remedy, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${index + 1}. ${remedy}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DepressionPredictionCard;
